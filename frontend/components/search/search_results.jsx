import React from 'react';

class SearchResults extends React.Component {
  render() {

    return(
      <div className="search-results-container">
        <ul className="subject-listttttt">
          {
            this.props.subjects.map( subject => (
              <li key={subject.id}>
                <div className="subject-combooo">
                  <h2>{subject.name}</h2>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default SearchResults;
