import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';


class App extends Component {
  state={
    usernames:[
      {name:'Julie'},
      {name:'Margo'},
    ]
  };
  changeUserName = (event)=>{
    this.setState({
      usernames:[
        {name:event.target.value},
        {name:'Margo'},
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <UserInput change={this.changeUserName} name={this.state.usernames[0].name}></UserInput>
        <UserOutput p1="hey there" p2="How are you?" username={this.state.usernames[0].name}></UserOutput>
        <UserOutput p1="I'm good" p2="And you?" username={this.state.usernames[1].name}></UserOutput>
        <UserOutput p1="I'm okay thanks" p2="How is the weather?" username={this.state.usernames[1].name}></UserOutput>
        <UserOutput p1="Sunny but cold" p2="Do you wnat to have dinner?" username={this.state.usernames[0].name}></UserOutput>

      </div>

    );
  }
}

export default App;
