import React from 'react';
import SearchBar from './SearchBar';
import FilterBar from './FilterBar';
import Results from './Results';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({
      query: '',
      filter: '',
      printType: '',
      books: []
    })
  }
  updateState = (event) => {
    console.log('updateState is : ' , event.target)
    // need conditional for query vs filters
    const { name, value } = event.target;
    console.log(name + ' ' + value);
    this.setState({
      [name]: value
    })
    event.preventDefault();
  }
  componentDidMount() {
  //   const endpoint = "https://www.googleapis.com/books/v1/volumes?key=AIzaSyB6i58gDXBIJ7cwLzgnsXL6sdkww-vqdHY"
  //   const testEndpoint= endpoint + '&q=' + this.state.query;
  //   console.log(this.state);
  //   fetch(testEndpoint)
  //     .then(response => response.json())
  //     .then(responseJson => {
  //       this.setState({
  //         books: responseJson
  //       })
  //     })
  }
  render() {
    return (
      <main className='App'>
        <h1>Google Book Search</h1>
        <SearchBar 
          handleChange={this.updateState} 
          queryValue={this.state.query}
        />
        <FilterBar 
          handleChange={event => this.updateState(event)}
          filterValue={this.state.filter} 
          printTypeValue={this.state.printType}
        />
        <Results 
          handleChange={event => this.updateState(event)} 
          books={this.state.books}
        />
      </main>
    );
  }
}

export default App;