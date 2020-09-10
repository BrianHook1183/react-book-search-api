import React from 'react';
import Book from './Book';

class Results extends React.Component {
  render() {
    return (
      <div className= "Results">
        <h2>This is the Results</h2>
        {console.log(this.props.books.items)}
        <Book />
      </div>
    );
  }
}


export default Results;