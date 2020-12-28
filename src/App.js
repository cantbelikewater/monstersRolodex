import './App.css';
import React, { Component } from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users=> this.setState({monsters: users}));

    console.log(this.state.monsters);
    this.state.monsters.forEach(x => console.log(x));
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value});
  }

  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <SearchBox 
          placeHolder = 'search monsters'
          handleChange = {this.handleChange}
        />

        <CardList monsters={filteredMonsters} > 
        </CardList>
      </div>
    );
  }
}

export default App;
