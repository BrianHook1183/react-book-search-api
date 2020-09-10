import React from 'react';
import SearchBar from './SearchBar';
import FilterBar from './FilterBar';
import Results from './Results';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <main className='App'>
        <h1>Google Book Search</h1>
        <SearchBar />
        <FilterBar />
        <Results />
      </main>
    );
  }
}

export default App;