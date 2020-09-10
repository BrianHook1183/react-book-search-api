import React from 'react';
import SearchBar from './SearchBar';
import FilterBar from './FilterBar';
import Results from './Results';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({
      query: "",
      filter: "ebooks",
      printType: "all",
      books: []
    })
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const { query, filter, printType } = this.state;

    const endpoint = "https://www.googleapis.com/books/v1/volumes?key=AIzaSyB6i58gDXBIJ7cwLzgnsXL6sdkww-vqdHY"
    const url= endpoint + '&q=' + query + '&filter=' + filter + '&printType=' + printType;
    // console.log(url);
    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState({
          books: responseJson
        })
      })
  }
  handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  componentDidMount() {
    // console.log('componentDidMount ran')
  }

  render() {
    return (
      <main className='App'>
        <h1>Google Book Search</h1>
        <SearchBar 
          handleSubmit={this.handleSubmit} 
          handleInputChange={this.handleInputChange}
          query={this.state.query}
        />
        <FilterBar 
          handleInputChange={this.handleInputChange}
          filterValue={this.state.filter} 
          printTypeValue={this.state.printType}
        />
        <Results 
          handleInputChange={this.handleInputChange} 
          books={this.state.books}
        />
      </main>
    );
  }
}

export default App;