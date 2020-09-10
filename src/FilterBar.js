import React from 'react';

class FilterBar extends React.Component {
  render() {
    return (
      <div className= "FilterBar">

        <label>Print Type: </label>
        <select 
          name="printType"
          onChange={this.props.handleInputChange}
          value={this.props.printTypeValue}
        >
          <option value="all">All</option>
          <option value="books">Books</option>
          <option value="magazines">Magazines</option>
        </select>

        <label>Book Type: </label>
        <select 
          name="filter"
          onChange={this.props.handleInputChange}
          value={this.props.filterValue}
        >
          <option value="ebooks">eBooks</option>
          <option value="free-ebooks">Free eBooks</option>
        </select>
      </div>
    );
  }
}

export default FilterBar;