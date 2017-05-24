import React from 'react';
import { Link, hashHistory } from 'react-router';

class Subject extends React.Component {

  constructor(props){
    super(props);
    this.state = {name: "", formShow: true, createSubjectModalIsOpen: false};
    this.createSubject = this.createSubject.bind(this);
    this.selectSubject = this.selectSubject.bind(this);
    this.isSelected = this.isSelected.bind(this);
    this.toggleCreateSubject = this.toggleCreateSubject.bind(this);
  }

  componentDidMount(){
    this.props.fetchSubjects();
  }

  componentWillUnmount() {
  }

  toggleCreateSubject(){
    if (this.state.createSubjectModalIsOpen){
      this.setState({createSubjectModalIsOpen: false})
    }else{
      this.setState({createSubjectModalIsOpen: true})
    }
  }

  subjectForm(){
    if (this.state.createSubjectModalIsOpen){
      return (
        <li className="subject-form">
          New Subject
          <form onSubmit={this.createSubject}>
            <input placeholder=" e.g. Classy Stuff"
              type="text"
              value={this.state.name}
              onChange={this.update("name")}
              />
            <button onClick={this.toggleCreateSubject}>Cancel</button>
            <input type="submit" value="Save"/>
          </form>
        </li>
      )
    }
  }

  createSubject(){
    this.props.createSubject({name: this.state.name}).then(()=>hashHistory.push("/library"))
    this.setState({name: ""})
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  reccomended(name){
    if (name === "Civics and History" || name === "World History" || name === "Random Trivia") {
      return <h3>Flashy Reccomended</h3>
    }
  }

  selectSubject(subject){
    hashHistory.push(`library/${subject.id}`);
  }

  isSelected(subject){
    if (parseInt(this.props.currentSubjectId) === subject.id) {
      return "selected-subject"
    }else {
      return ""
    }
  }

  // blackOut () {
  //   if (this.state.formShow) {
  //     return (<div className="black-out"
  //     ></div>);
  //   }
  // }
  // onClick={this.setState({formShow: false})}
  // <button onClick={() => this.setState({formShow: true})}>+ Create</button>

  barStyle(scores){

    return {
      WebkitTransition: 'all',
      msTransition: 'all',
      background: "#aca",
      borderRadius: '4px',
      height: "10px",
      width: `${scores}%`
    }
 }

  render() {
    return(
      <div className="subject-container">
        <div className="subject-header group">
          <h2 className="subject-title">Subjects</h2>
          <button onClick={this.toggleCreateSubject}><i className="fa fa-plus" aria-hidden="true"></i>Create</button>
        </div>
        <ul className="subject-list">
          {this.subjectForm()}
          {
            this.props.subjects.map( subject => (
              <li key={subject.id}
                onClick={() => this.selectSubject(subject)}
                className="subject-item"
                id={this.isSelected(subject)}
                >
                <div className="subject-combo">
                  <h2>{subject.name}</h2>
                  { this.reccomended(subject.name)}
                </div>
                <div className="score-bar">
                  <div id="subject-score" className="bar" >
                    <div style={this.barStyle(subject.scores)}>&nbsp;</div>
                  </div>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
};

export default Subject;
