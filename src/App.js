import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBar from './components/search-bar/search-bar.component';

// const URL = 'https://jsonplaceholder.typicode.com/users'

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters : [],
      searchField : ""
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response => 
      response.json()
    ).then(users => {
        this.setState({monsters : users})
        console.log(users)
    })
  }

  render(){

    const {searchField, monsters} = this.state
    const filterMonster = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()) )

    return (
      <div className="App">
        <h1>Monster Rollex</h1> 
        <SearchBar placeholder = "Search Monster" handleChange = {(e) => {this.setState({searchField : e.target.value})} } />
        <CardList monsters = {filterMonster}></CardList>
      </div>
    );
  }
}
export default App;

