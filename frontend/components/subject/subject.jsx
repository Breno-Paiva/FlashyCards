import React from 'react';
import { Link } from 'react-router';

class Subject extends React.Component {

  constructor(props){
    super(props);
    this.deleteSubject = this.deleteSubject.bind(this);
    this.state = {name: ""};
    this.createSubject = this.createSubject.bind(this);
  }

  componentDidMount(){
    this.props.fetchSubjects();
  }

  deleteSubject(subject){
    this.props.deleteSubject(subject).then(()=>this.props.fetchSubjects())
  }

  subjectForm(){
    return (
      <li className="subject-form">
        New Subject
        <form onSubmit={this.createSubject}>
          <input placeholder=" e.g. Classy Stuff"
            type="text"
            value={this.state.name}
            onChange={this.update("name")}
            />
          <input type="submit" value="save"/>
        </form>
      </li>
    )
  }

  createSubject(){
    this.props.createSubject(this.state)
    this.setState({name: ""})
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    return(
      <div>
        <h2>subject index ul</h2>
        <ul>
          {
            this.props.subjects.map( subject => (
              <li key={subject.id}>
                {subject.name}
                <button onClick={() => this.deleteSubject(subject)}>delete</button>
              </li>
            ))
          }
          {this.subjectForm()}
        </ul>
      </div>
    )
  }
};

export default Subject;
