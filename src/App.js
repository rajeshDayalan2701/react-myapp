import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Contact from './Components/Contact';
import MainComponent from "./Components/MainComponent";
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Route exact path='/' component={MainComponent}></Route>
            <Route path='/about' component={About}></Route>
            <Route path='/contact' component={Contact}></Route>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
