import React from 'react';

class FilterBar extends React.Component {
  render() {
    return (
      <div className= "FilterBar">

        <label>Book Type: </label>
        <select 
          name="filter"
          onChange={this.props.handleInputChange}
          value={this.props.filterValue}
        >
          <option value="ebooks">eBooks</option>
          <option value="free-ebooks">Free eBooks</option>
        </select>

        <label>Order By: </label>
        <select 
          name="orderBy"
          onChange={this.props.handleInputChange}
          value={this.props.orderByValue}
        >
          <option value="relevance">Relevance</option>
          <option value="newest">Newest</option>
        </select>


      </div>
    );
  }
}

export default FilterBar;