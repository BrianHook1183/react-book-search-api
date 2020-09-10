import React from 'react';

class FilterBar extends React.Component {
  render() {
    return (
      <div className= "FilterBar">
        <label>Print Type: </label>
        <select>
          <option value="all">All</option>
          <option value="books">Books</option>
          <option value="magazines">Magazines</option>
        </select>
        <label>Book Type: </label>
        <select>
          <option>No Filter</option>
          <option value="ebooks">eBooks</option>
          <option value="free-ebooks">Free eBooks</option>
        </select>
      </div>
    );
  }
}

export default FilterBar;