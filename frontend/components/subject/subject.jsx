import React from 'react';
import { Link } from 'react-router';

class Subject extends React.Component {

  componentDidMount(){
    this.props.fetchSubjects();
  }

  // this.props.fetchSubjects()
  render() {
    return(
      <div>
        <h2>subject index ul</h2>
        <ul>
          {
            this.props.subjects.map(subject  =>  {
              return (
                <li>
                  {subject.name}
                </li>
              )})
          }
        </ul>
      </div>
    )
  }
};

export default Subject;
