import React, { Component } from 'react';
import Ninjas from '../Ninjas';
import AddNinja from '../AddNinja';

class MainComponent extends Component {
  
  state = {
    ninjas: [
      { name: 'Rajesh', age: 23, profession: 'Associate Software Analyst', id: 1},
      { name: 'Sathish', age: 26, profession: 'Technology Analyst', id: 2}
    ]
  };

  addNinja = (ninja) => {
    ninja.id = this.state.ninjas.length + 1;
    let newNinja = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: newNinja
    });
  };

  deleteNinja = (id) => {
    let filteredNinjas = this.state.ninjas.filter(ninja => ninja.id !== id);
    this.setState({
      ninjas: filteredNinjas
    });
  };

  render () {
    return (
      <div className="App">
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja}/><br/>
        <AddNinja addNinja={this.addNinja}  integerValue={this.state.number}/>
      </div>
    )
  }
}

export default MainComponent;