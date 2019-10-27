import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pokeball from '../pokeball.png';
import { Link } from 'react-router-dom';

class ReduxPosts extends Component {
  
  render() {
    const url = this.props.location.pathname;
    const posts = this.props.posts;
    const showPosts = posts ? (
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
      <div className="reduxPosts">
        <h2 className="center">Redux Posts</h2>
        {showPosts}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(ReduxPosts);