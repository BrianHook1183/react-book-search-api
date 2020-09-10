import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div className= "SearchBar">
        <form onSubmit={this.props.handleChange}>
          <label>Search:
            <input 
              type="text" 
              name="query"
            />
          </label>
          <button>Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;