import React from 'react';
import { Link } from 'react-router';
import Scroll from 'react-scroll';

var ScrollLink       = Scroll.Link;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

class Deck extends React.Component {

  constructor(props){
    super(props);
    this.state = {name: "", subject_id: this.props.currentSubjectId,
      modalIsOpen: false,
      modalId: null,
      createDeckModalIsOpen: false

    };
    this.createDeck = this.createDeck.bind(this);
    this.deleteDeck = this.deleteDeck.bind(this);
    this.currentSubject = this.currentSubject.bind(this);
    this.studyButton = this.studyButton.bind(this);
    this.renderDeckButton = this.renderDeckButton.bind(this);
    this.addCardButton = this.addCardButton.bind(this);
    this.deleteSubject = this.deleteSubject.bind(this);
    this.renderCogModal = this.renderCogModal.bind(this);
    this.toggleCog = this.toggleCog.bind(this);
    this.removeCog = this.removeCog.bind(this);
    this.toggleCreateDeck = this.toggleCreateDeck.bind(this);
  }

  componentDidMount(){
    if (this.props.currentSubjectId) {
      this.props.fetchDecks(this.props.currentSubjectId)
    }


    // Events.scrollEvent.register('begin', function(to, element) {
    //   console.log("begin", arguments);
    // });
    //
    // Events.scrollEvent.register('end', function(to, element) {
    //   console.log("end", arguments);
    // });
    //
    // scrollSpy.update();

  }

  componentDidUpdate(prevProps){
    if (this.props.currentSubjectId != prevProps.currentSubjectId) {
      this.props.fetchDecks(this.props.currentSubjectId)
    }
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  deckForm(){
    if (this.state.createDeckModalIsOpen) {
      return (
        <li className="deck-form">
          New Deck
          <form onSubmit={this.createDeck}>
            <input placeholder=" e.g. Chapter 1"
              type="text"
              value={this.state.name}
              onChange={this.update("name")}
              />
            <button onClick={this.toggleCreateDeck}>Cancel</button>
            <input type="submit" value="Save"/>
          </form>
        </li>
      )
    }
  }

  createDeck(){
    this.setState({subject_id: this.props.currentSubjectId}, () => {
      this.props.createDeck(this.state)
      .then(()=>this.setState({name: ""}))
    })
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  currentSubject(){
    if (this.props.subject) {
      return <h3>
               {`Study ${this.props.subject.name}`}
               <i className="fa fa-trash"
                 aria-hidden="true"
                 onClick={() => this.deleteSubject(this.props.subject)}
                 ></i>
             </h3>
    } else {
      return <h3>Pick a Subject to Study!</h3>
    }
  }

  deleteSubject(subject){
    this.props.deleteSubject(subject).then(()=>this.props.fetchSubjects())
  }

  deleteDeck(deck){
    this.props.deleteDeck(deck).then(()=>this.props.fetchDecks(this.props.currentSubjectId))
  }

  studyButton(deck){
    return (
      <div className="manage-deck-buttons" onMouseLeave={()=>this.removeCog()}>
        <Link to={`/study/${deck.id}`}>
          <div className="study-button">
            <i className="fa fa-play-circle-o" aria-hidden="true"></i>
            Study
          </div>
        </Link>
        <div className="deck-settings" onMouseOver={()=>this.toggleCog(deck)}>
          <i className="fa fa-cog" aria-hidden="true"></i>
        </div>
        {this.renderCogModal(deck)}
      </div>
    )
  }

  toggleCog(deck){
    if (this.state.modalIsOpen){
      this.setState({modalId: null})
    }else{
      this.setState({modalId: deck.id})
    }
  }
  toggleCreateDeck(){
    if (this.state.createDeckModalIsOpen){
      this.setState({createDeckModalIsOpen: false})
    }else{
      this.setState({createDeckModalIsOpen: true})
    }
  }

  removeCog(){
    this.setState({modalId: null})
  }

  renderCogModal(deck){
    if (this.state.modalId === deck.id){
      return <div className="deck-cog">
              <ul>
                <li>
                  <Link to={`/decks/${deck.id}/cards`}>
                    <i className="fa fa-pencil" aria-hidden="true"></i> edit cards
                  </Link>
                </li>
                <li onClick={() => this.deleteDeck(deck)}>
                  <i className="fa fa-minus-circle" aria-hidden="true"></i> delete
                </li>
              </ul>
             </div>
    }
  }

  addCardButton(deck){
    return(
      <div className="manage-add-buttons" onMouseLeave={()=>this.removeCog()}>
        <Link to={`/decks/${deck.id}/cards`}>
          <div className="add-card-button">
            <i className="fa fa-plus" aria-hidden="true"></i>
            Add Cards
          </div>
        </Link>
        <div className="deck-settings">
          <i className="fa fa-cog" aria-hidden="true" onMouseOver={()=>this.toggleCog(deck)}></i>
        </div>
        {this.renderCogModal(deck)}
      </div>
    )
  }

  renderDeckButton(deck){
    if(deck.card_amount === 0){
      return this.addCardButton(deck)
    }else{
      return this.studyButton(deck)
    }
  }

  renderDeckScore(deck){
    let score
    if (deck.total_score === 0){
      score = 0
    }else{
       score = Math.round(deck.total_score/deck.card_amount*20)
    }

    let scoreColor
    switch (Math.floor(score/25)) {
      case 0: scoreColor = "#aa0080"
        break;
      case 1: scoreColor = "#ff8a47"
        break;
      case 2: scoreColor = "#ffdd00"
        break;
      case 3: scoreColor = "#7fae2e"
        break;
      default: scoreColor = "#00a8d"
    }
    return <h4 className="deck-score" style={{color: scoreColor}}>{`${score}%`}</h4>
  }

  render () {
    if (this.props.currentSubjectId){
      return(
        <div className="deck-container">
          <div className="deck-header">
            {this.currentSubject()}
            <div>
              <h4>Decks</h4>
              <ScrollLink activeClass="active" to="newDeck" smooth={true} duration={750}>
                <button className="new-card-button" onClick={this.toggleCreateDeck}><i className="fa fa-plus-circle" aria-hidden="true"></i> Add Deck</button>
              </ScrollLink>
            </div>
          </div>
          <ul className="deck-list">
            {
              this.props.decks.map( deck => (
                <li key={deck.id} className="deck-item">
                  <div className="left-deck-item">
                    {this.renderDeckScore(deck)}
                    <div>
                      <Link to={`/study/${deck.id}`}>
                        <h4>{deck.name}</h4>
                      </Link>
                      <br/>
                      <h4 className="card-count">{`cards: ${deck.card_amount}`}</h4>
                    </div>
                  </div>
                  <div className="deck-buttons">
                    {this.renderDeckButton(deck)}
                  </div>
                </li>
              ))
            }
            {this.deckForm()}
          </ul>
          <Element name="newDeck" className="element"></Element>
        </div>
      )
    }else{
      return(
        <div className="deck-container">
          <div className="deck-header">
            {this.currentSubject()}
          </div>
        </div>
      )
    }
  }
}

export default Deck;
