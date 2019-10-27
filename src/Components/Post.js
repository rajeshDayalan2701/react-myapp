import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {

  state = {
    post: null
  };

  componentDidMount () {
    let id = this.props.match.params.post_id;
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        this.setState({
          post: res.data
        })
      });
  }

  render () {
    const showPost = this.state.post ? (
      <div className="post">
        <h3 className="center">{this.state.post.title}</h3>
        <p>{this.state.post.body}</p>
      </div>
    ) : (
      <h3 className="center">Post is Loading...</h3>
    );
    return (
      <div className="container">
        { showPost }
      </div>
    );
  }
}

export default Post;