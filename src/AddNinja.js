import React, { Component } from 'react';
import './AddNinja.css';

class AddNinja extends Component {
  state = {
    name: '',
    age: '',
    profession: ''
  }

  handleChange = ({target: {id, value}}) => {
    this.setState({
      [id]:value
    });
  }

  submitForm = (e) => {
    e.preventDefault();
    this.props.addNinja(this.state);
    this.setState({
      name: '',
      age: '',
      profession: ''
    });
  }

  render () {
    return (
      <div className="add-ninja-component">
        <form onSubmit= {this.submitForm}>
          <div className="input-element">
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" onChange={this.handleChange} value={this.state.name}/>
          </div>
          <div className="input-element">
            <label htmlFor="age">age: </label>
            <input type="number" id="age" onChange={this.handleChange} value={this.state.age}/>
          </div>
          <div className="input-element">
            <label htmlFor="profession">profession: </label>
            <input type="text" id="profession" onChange={this.handleChange} value={this.state.profession}/>
          </div>
          <div className="input-element">
            <button className="btn waves-effect waves-light" type="submit" name="action">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default AddNinja;