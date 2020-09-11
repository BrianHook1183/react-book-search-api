import React from 'react';
import Book from './Book';

class Results extends React.Component {
  render() {
    let resultsHeader = "";
    this.props.isLoaded ? 
    resultsHeader = "Here are your results!" : 
    resultsHeader = "I'm ready to search for you!"
    const bookList = this.props.bookFetch.map((book, index) => (
      <Book 
        key={index} 
        title={book.title} 
        authors={book.authors}
        infoLink={book.infoLink}
        smallThumbnail={book.imageLinks.smallThumbnail}
        description={book.description.slice(0, 200)}
      />
    ));
    return ( 
      <div className= "Results">
        <h2>{resultsHeader}</h2>
          {bookList}
      </div>
    );
  } 
}



export default Results;