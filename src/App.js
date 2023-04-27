import React, {Component} from 'react';

import { CardList } from './components/card-list/card-list.component';

import { SearchBox } from './components/search-box/search-box.components';

import './App.css';

class App extends Component{

  constructor() {
    super();
    this.state = {
  
      monsters: [],
      searchField: ''
  
    }
  }


  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }))
  }
// The arrow sign is used to bind (this), automatically when (this) called
  handleChange = e => {
    this.setState({ searchField: e.target.value })
  }

  render() {
      const { monsters, searchField  }=this.state;
      const filteredMonsteres = monsters.filter(monsters => 
      monsters.name.toLowerCase().includes(searchField.toLowerCase())
       )
      return (
        <div className="App">
          {/* <input 
            type='search' 
            placeholder='search monsters'
            onChange={e => this.setState({ searchField: e.target.value })}
          /> */}
          <h1> Monsters Rolodex </h1>
          <SearchBox placeholder= 'search monsters' handleChange= {this.handleChange}/>          
          <CardList monsters={filteredMonsteres} />

          {/* this.state.monsters */}
          
          {/* <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p> { this.state.string } </p>
            <button onClick = {() => this.setState({ string: 'Hello Family' })}> Click Here !!</button>
          </header> */}
        </div>
      );
  }
}

export default App;
