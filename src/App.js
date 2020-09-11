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
      orderBy: "relevance",
      bookFetch: [],
      isLoaded: false,
      fetchError: ""
    })
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const { query, filter, orderBy } = this.state;

    const endpoint = "https://www.googleapis.com/books/v1/volumes?key=AIzaSyB6i58gDXBIJ7cwLzgnsXL6sdkww-vqdHY"
    const url= endpoint + '&q=' + query + '&filter=' + filter + '&orderBy=' + orderBy;
    // console.log(url);
    fetch(url)
      .then(response => {
        if(!response.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return response;
      })
      .then(response => response.json())
      .then(responseJson => {
        const bookList = Object.keys(responseJson.items)
                        .map(key => responseJson.items[key].volumeInfo)
        this.setState({
          bookFetch: bookList,
          isLoaded: true
        })
        console.log(bookList);
      })
      .catch(err => {
        this.setState({
          fetchError: err.message
        });
      });
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
          orderByValue={this.state.orderBy}
        />
        <Results 
          isLoaded={this.state.isLoaded}
          bookFetch={this.state.bookFetch}
          fetchError={this.state.fetchError}
        />
      </main>
    );
  }
}

export default App;