import React from 'react';
import './Book.css'

class Book extends React.Component {
  render() {
    const {title, authors, 
      infoLink, 
      smallThumbnail, description } = this.props;
    return (
      <div className= "Book">
        <div className= "book-picture">
          <img src={smallThumbnail} />
        </div>
        <div className= "book-text">
          <h3>{title}</h3>
          <p>Author: {authors}</p>
          <p>{description}... <a href={infoLink} target="blank">More info</a></p>
          <p></p>
          <hr />
        </div>

      </div>
    );
  }
}

export default Book;