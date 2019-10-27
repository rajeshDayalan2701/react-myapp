import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Pokeball from '../pokeball.png';

class Posts extends Component {

  state = {
    posts: []
  }

  componentDidMount () {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        this.setState({
          posts: res.data.splice(0, 10)
        });
      });
  }

  render () {
    const url = this.props.location.pathname;
    const posts = this.state.posts;
    const showPosts = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <img src={Pokeball} alt="A pokeball"/>
            <div className="card-content">
              <Link to={`${url}/${post.id}`}>
                <div className="card-title red-text">{post.title}</div>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <p className="center">No posts to show</p>
    )

    return(
      <div className="posts">
        <h2 className="center">Posts</h2>
        {showPosts}
      </div>
    )
  }
}

export default Posts;