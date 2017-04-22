import React from 'react';
import { Link } from 'react-router';

class Subject extends React.Component {

  constructor(props){
    super(props)
    this.deleteSubject = this.deleteSubject.bind(this);
  }

  componentDidMount(){
    this.props.fetchSubjects();
  }

  componentWillReceiveProps(){
    // this.props.fetchSubjects();
  }

  deleteSubject(subject){
    this.props.deleteSubject(subject).then(()=>this.props.fetchSubjects())
  }

  // this.props.fetchSubjects()
  render() {
    return(
      <div>
        <h2>subject index ul</h2>
        <ul>
          {
            this.props.subjects.map( subject => {
              return (
                <li>
                  {subject.name}
                  <button onClick={() => this.deleteSubject(subject)}>delete</button>
                </li>
              )})
          }
        </ul>
      </div>
    )
  }
};

export default Subject;
