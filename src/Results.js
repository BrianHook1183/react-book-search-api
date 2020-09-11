import React from 'react';
import Book from './Book';

class Results extends React.Component {
  render() {
    let resultsHeader = "";
    this.props.isLoaded ? 
    resultsHeader = "Here are your results. sir" : 
    resultsHeader = "I'm ready to search for you, sir"

    const bookList = this.props.bookFetch.map((book, index) => (
    <p key={index}>{book.title}</p>
    ))

    return ( 
      <div className= "Results">
        <h2>{resultsHeader}</h2>
          {bookList}
      </div>
    );
  } 
}


export default Results;