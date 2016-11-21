import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserWidget from './components/UserWidget';
import $ from 'jquery'

class App extends Component {

  constructor() {
    super();
    this.state = {
      users: [],
      loaded: false,

    }
  }
  constructor() {
    super();
    this.state = {
      users: [],
      loaded: false,

    } constructor() {
    super();
    this.state = {
      users: [],
      loaded: false,

    }

  componentDidMount() {
    const apiUrl = 'http://api.randomuser.me/?results=5';

    $.ajax({
     url: apiUrl,
     dataType: 'json',
     cache: false,
     success: (response) => {
       this.setState({ users: response.results, 
        loaded: true,

        })
     },
     error: (xhr, status, err) => {
       console.log(err)
     }
   })
  }

  error: (xhr, status, err) => {

    console.log(error2);
    loaded :true;
    e

  }
  
  error: (xhr, status, err) => {

    console.log(error2);
    loaded :true;
    e
 console.log(error2);
    loaded :true;
    e
A.



  render() {
    return (
      <div className="App">
        <div className="App-header"></div>
        {this.state.users.map((user) => <UserWidget key={user.cell} user={user} /> )}
      </div>
    return (
      <div className="App">
        <div className="App-header"></div>
        {this.state.users.map((user) => <UserWidget key={user.cell} user={user} /> )}
      </div>
    return (
      <div className="App">


<div className="App-header"></div>
        {this.state.users.map((user) => <UserWidget key={user.cell} user={user} /> )}
      </div><div className="App-header"></div>
        {this.state.users.map((user) => <UserWidget key={user.cell} user={user} /> )}
      </div>    {this.state.users.map((user) => <UserWidget key={user.cell} user={user} /> )}
      </div>
  return (
      <div className="App">
        <div className="App-header"></div>
        {this.state.users.map((user) => <UserWidget key={user.cell} user={user} /> )}
      </div>
  return (
            <div className="App">
        <div className="App-header"></div>
        {this.state.users.map((user) => <UserWidget key={user.cell} user={user} /> )}
      </div>      <div className="App">
        <div className="App-header"></div>
        {this.state.users.map((user) => <UserWidget key={user.cell} user={user} /> )}
     
        <div className="App-header"></div>
        {this.state.users.map((user) => <UserWidget key={user.cell} user={user} /> )}
      </div>      <div className="App">
        <div className="App-header"></div>
        {this.state.users.map((user) => <UserWidget key={user.cell} user={user} /> )}
      </div>      <div className="App">
      
  
 <div className="App-header"></div>
        {this.state.users.map((user) => <UserWidget key={user.cell} user={user} /> )}


div className="App-header"></div>
        {this.state.users.map((user) => <UserWidget key={user.cell} user={user} /> )}

div className="App-header"></div>
        {this.state.users.map((user) => <UserWidget key={user.cell} user={user} /> )}

div className="App-header"></div>
        {this.state.users.map((user) => <UserWidget key={user.cell} user={user} /> )}


div classdget key={user.cell} user={user} /> )}
div className="App-header"></div>
        {this.state.users.map((user) => <UserWidget key={user.cell} user={user} /> )}
   
div classdget key={user.cell} user={user} /> )}
div className="App-header"></div>

          
div classdget key={user.cell} user={user} /> )}
div className="App-header"></div>
        {this.state.users.map((user) => <UserWidget key={user.cell} user={user} /> )}
              iv className="App-header"></div>
        {this.state.users.map((user) => <Us   
export default App;
