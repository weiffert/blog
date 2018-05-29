import React from "react";

import base from "./base";
import { auth, googleProvider } from "./base";

import "./Main.css";

import Header from "./Header";
// import Body from "./Body";
import Post from "./Post";
import List from "./List";
import Footer from "./Footer";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      currentPost: null,
      posts: []
    };
  }

  componentWillMount() {
    base.syncState("posts", {
      context: this,
      state: "posts",
      asArray: true
    });

    auth.onAuthStateChanged(user => {
      if(user) {
        this.handleAuth(user.displayName);
      } else {
        this.signOut();
      }
    });
  }

  signOut = () => {
    auth.signOut();
    this.setState({
      username: "" 
    });
  };

  handleAuth = (user) => {
    this.setState({
      username: user
    });
  };
  
  goToLogin = () => {
    if (this.state.username) {
      auth.signOut();
    } else {
      auth.signInWithPopup(googleProvider);
    }
  };


  makeBlankPost = () => {
    return {
      author: "",
      id: Date.now(),
      date: Date.now(),
      title: "",
      body: "",
      comments: []
    };
  };

  makeComment = body => {
    const date = new Date();
    return {
      author: this.state.username ? this.state.username : "anonymous",
      date: `${date.getHours()}:${
        date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
      } on ${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`,
      body
    };
  };

  goToNewest = () => {
    this.setState({
      currentPost: this.state.posts[0]
    });
  };

  goToRandom = () => {
    this.setState({
      currentPost: this.state.posts[
        Math.floor(Math.random() * this.state.posts.length)
      ]
    });
  };

  goToList = () => {
    this.setState({
      currentPost: null
    });
  };

  goToPost = post => {
    this.setState({
      currentPost: post
    });
  };

  goToCompose = () => {
    console.log("compose");
  };

  addComment = event => {
    event.preventDefault();
    const currentPost = { ...this.state.currentPost };
    const comment = this.makeComment(event.target.comment.value);
    currentPost.comments.push(comment);

    this.setState({
      currentPost
    });

    event.target.reset();
  };

  render() {
    return (
      <div className="Main">
        <Header
          newest={this.goToNewest}
          random={this.goToRandom}
          list={this.goToList}
          login={this.goToLogin}
          compose={this.goToCompose}
          username={this.state.username}
        />
        {this.state.currentPost ? (
          <Post
            post={this.state.currentPost}
            addComment={this.addComment}
            username={this.state.username}
          />
        ) : (
          <List posts={this.state.posts} goToPost={this.goToPost} />
        )}
        <Footer />
      </div>
    );
  }
}

export default Main;
