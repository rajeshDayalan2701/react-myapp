import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Posts from './Components/Posts';
import ReduxPosts from './Components/ReduxPosts';
import MainComponent from "./Components/MainComponent";
import { BrowserRouter, Route } from 'react-router-dom';
import Post from "./Components/Post";
import ReduxPost from './Components/ReduxPost';

class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Route exact path='/' component={MainComponent}></Route>
            <Route exact path='/posts' component={Posts}></Route>
            <Route exact path='/reduxPosts' component={ReduxPosts}></Route>
            <Route path='/reduxPosts/:post_id' component={ReduxPost}></Route>
            <Route path='/posts/:post_id' component={Post}></Route>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
