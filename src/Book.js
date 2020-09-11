import React from 'react';

class Book extends React.Component {
  render() {
    return (
      <div className= "Book">
        <h3>{this.props.title}</h3>
      </div>
    );
  }
}

export default Book;