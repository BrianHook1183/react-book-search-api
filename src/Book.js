import React from 'react';

class Book extends React.Component {
  render() {
    const {title, authors, 
      publishedDate, infoLink, 
      smallThumbnail, description } = this.props;
    return (
      <div className= "Book">
        <h3>{title}</h3>
        <h4>Author: {authors}</h4>
        <p>{description}... <a href={infoLink} target="blank">More info</a></p>
        <p></p>
        <hr />
      </div>
    );
  }
}

export default Book;