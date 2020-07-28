import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from  './components/user';
import UniqueId from 'react-html-id';

class App extends Component {
  constructor() {
    super();
    UniqueId.enableUniqueIds(this);
    this.state = {
      users : [
        {id: this.nextUniqueId(), name : "Jim", age : 20},
        {id: this.nextUniqueId(), name : "Joe", age : 30},
        {id: this.nextUniqueId(), name : "Jel", age : 40}
      ]
    }
    console.log(this.state);
  }

  handleChangeName = (id, e) => {
    const index = this.state.users.findIndex((user) => {
      return user.id === id;
    });
    const user = Object.assign({}, this.state.users[index]);
    user.name = e.target.value;
    const users = Object.assign([], this.state.users);
    users[index] = user;
    this.setState({users:users});
  }

  handleDelete = (index, e) => {
    const users = Object.assign([], this.state.users);
    users.splice(index, 1);
    this.setState({users:users})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <br />
        <ul>
        {
          this.state.users.map((user, index) => {
              return (
                <User
                  key={user.id}
                  changeName={this.handleChangeName.bind(this, user.id)}
                  delEvent={this.handleDelete.bind(this, index)} 
                  age={user.age} >
                  {user.name}
                </User>
              )
          })
        }
        </ul>
      </div>
    );
  }
}

export default App;
