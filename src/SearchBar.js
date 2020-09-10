import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div className= "SearchBar">
        <form 
           onSubmit={this.props.handleSubmit}
        >
          <input 
            placeholder="Search Term"
            type="text" 
            name="query"
            value={this.props.query}
            onChange={this.props.handleInputChange}
          />
          <button>Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;