import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import base from "./base";
import { auth, googleProvider } from "./base";

import "./Main.css";

import Header from "./Header";
import Post from "./Post";
import List from "./List";
import Footer from "./Footer";
import Compose from "./Compose";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      currentPost: null,
      posts: [],
    };
  }

  componentWillMount() {
    base.syncState("posts", {
      context: this,
      state: "posts",
      asArray: true,
    });

    auth.onAuthStateChanged(user => {
      if (user) {
        this.handleAuth(user.displayName);
      } else {
        this.signOut();
      }
    });
  }

  signOut = () => {
    auth.signOut();
    this.setState({
      username: "",
    });
  };

  handleAuth = user => {
    this.setState({
      username: user,
    });
  };

  goToLogin = () => {
    if (this.state.username) {
      auth.signOut();
    } else {
      auth.signInWithPopup(googleProvider);
    }
  };

  publish = post => {
    this.updatePost(post);

    const posts = [...this.state.posts];
    const date = new Date();
    post.published.date = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;

    if (post.id !== null) {
      const index = posts.findIndex(p => p.id === post.id);
      posts.splice(index, 1);
    }
    posts.unshift(post);

    this.setState({ posts });
  };

  unpublish = id => {
    const posts = [...this.state.posts];

    const index = posts.findIndex(p => p.id === id);

    posts[index].published.title = "";
    posts[index].published.body = "";

    this.setState({ posts });
  };

  updatePost = post => {
    const posts = [...this.state.posts];

    const date = new Date();
    post.working.date = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;
    post.author = this.state.username;

    posts[posts.findIndex(p => p.id === post.id)] = post;

    this.setState({ posts });
  };

  makeComment = body => {
    const date = new Date();
    return {
      author: this.state.username ? this.state.username : "anonymous",
      date: `${date.getHours()}:${
        date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
      } on ${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`,
      body,
    };
  };

  addComment = event => {
    event.preventDefault();
    const currentPost = { ...this.state.currentPost };
    const comment = this.makeComment(event.target.comment.value);
    currentPost.comments.push(comment);

    this.setState({
      currentPost,
    });

    event.target.reset();
  };

  render() {
    return (
      <div className="Main">
        <Header login={this.goToLogin} username={this.state.username} />
        <Switch>
          <Route
            path="/posts/newest"
            render={() => <Redirect to={`/posts/${this.state.posts[0].id}`} />}
          />
          <Route
            path="/posts/random"
            render={() => (
              <Redirect
                to={`/posts/${
                  this.state.posts[
                    Math.floor(Math.random() * this.state.posts.length)
                  ].id
                }`}
              />
            )}
          />
          <Route
            path="/posts/:id"
            render={navProps => (
              <Post
                posts={this.state.posts}
                addComment={this.addComment}
                username={this.state.username}
                {...navProps}
              />
            )}
          />
          <Route
            path="/posts"
            render={navProps => (
              <List posts={this.state.posts} {...navProps} showDrafts={false} />
            )}
          />
          <Route
            path="/compose/:id"
            render={navProps => (
              <Compose
                {...navProps}
                posts={this.state.posts}
                update={this.updatePost}
                publish={this.publish}
                unpublish={this.unpublish}
              />
            )}
          />
          <Route
            path="/compose"
            render={navProps => (
              <List
                posts={this.state.posts}
                {...navProps}
                showDrafts={true}
              />
            )}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
