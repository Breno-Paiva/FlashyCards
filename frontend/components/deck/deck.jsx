import React from 'react';
import { Link } from 'react-router';

class Deck extends React.Component {

  constructor(props){
    super(props);
    this.state = {name: "", subject_id: this.props.currentSubjectId, modalIsOpen: false, modalId: null};
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

  }

  componentDidMount(){
    if (this.props.currentSubjectId) {
      this.props.fetchDecks(this.props.currentSubjectId)
    }
  }

  componentDidUpdate(prevProps){
    if (this.props.currentSubjectId != prevProps.currentSubjectId) {
      this.props.fetchDecks(this.props.currentSubjectId)
    }
  }

  deckForm(){
    if (this.props.currentSubjectId) {
      return (
        <li className="deck-form">
          New Deck
          <form onSubmit={this.createDeck}>
            <input placeholder=" e.g. Chapter 1"
              type="text"
              value={this.state.name}
              onChange={this.update("name")}
              />
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


  render () {
    if (this.props.currentSubjectId){
      return(
        <div className="deck-container">
          <div className="deck-header">
            {this.currentSubject()}
            <h4>Decks</h4>
          </div>
          <ul className="deck-list">
            {
              this.props.decks.map( deck => (
                <li key={deck.id} className="deck-item">
                  <div>
                    <Link to={`/study/${deck.id}`}>
                      <h4>{deck.name}</h4>
                    </Link>
                    <br/>
                    <h4 className="card-count">{`cards: ${deck.card_amount}`}</h4>
                  </div>
                  <div className="deck-buttons">
                    {this.renderDeckButton(deck)}
                  </div>
                </li>
              ))
            }
            {this.deckForm()}
          </ul>
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



// <div className="manage-deck-buttons">
//   <div className="studyy">
//     study
//   </div>
//   <div className="sett">
//     set
//   </div>
// </div>
// <Link to={`/study/${deck.id}`}>
//   <button className="deck-study">study</button>
// </Link>
// <Link to={`/decks/${deck.id}/cards`}>
//   <button className="edit-cards">edit cards</button>
// </Link>
// <button onClick={() => this.deleteDeck(deck)}>delete</button>
