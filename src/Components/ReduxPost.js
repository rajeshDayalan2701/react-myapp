import React from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../actions/postActions';

class ReduxPost extends React.Component {

  handleDeletePost = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push('/reduxPosts');
  }

  render () {
    const showPost = this.props.post ? (
      <div className="post">
        <h3 className="center">{this.props.post.title}</h3>
        <p>{this.props.post.body}</p>
        <div className="center">
          <button className="btn grey" onClick={this.handleDeletePost}>Delete Post</button>
        </div>
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

const mapStateToProps = (state, ownProps) => {
  let id = parseInt(ownProps.match.params.post_id);
  return {
    post: state.posts.find((post) => post.id === id)
  }
};

const mapDispatchToProps = (dispatch) => {
 return {
   deletePost: (id) => dispatch(deletePost(id))
 }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxPost);