import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div className= "SearchBar">
        <form>
          <label>Search:
            <input 
              type="text" 
            />
          </label>
        </form>
      </div>
    );
  }
}

export default SearchBar;