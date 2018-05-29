import React from "react";

import "./Main.css";

import Header from "./Header";
import Body from "./Body";
import Post from "./Post";
import List from "./List";
import Footer from "./Footer";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPost: null,
      posts: [
        {
          author: "William Eiffert",
          date: "May 28, 2018",
          title: "Test run",
          body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut faucibus lacus. Duis tincidunt feugiat nunc, vel maximus turpis dignissim eget. Etiam velit odio, molestie non pharetra id, faucibus eget ipsum. Curabitur accumsan ac massa nec venenatis. Vestibulum a erat sed eros ultricies blandit. Suspendisse sollicitudin dui vitae dapibus fermentum. Morbi sed blandit nisi, non ultrices ante. Nullam viverra sem id ipsum ultricies, quis tempor velit posuere. Integer sit amet sagittis odio. Sed mollis ex mi.

Nulla dolor massa, molestie blandit leo id, laoreet bibendum augue. Curabitur ac semper libero, at dictum nunc. Duis placerat arcu sit amet mauris condimentum faucibus. Pellentesque semper neque sed accumsan accumsan. Vestibulum at est tincidunt, sollicitudin mi eu, sagittis nisi. Donec commodo efficitur dolor, at porttitor nisl ornare vitae. Nullam lacinia tincidunt convallis. Duis efficitur nulla vel feugiat sagittis. Proin in erat condimentum enim iaculis suscipit.

Praesent at posuere nisl. Sed ultricies sed velit sit amet pharetra. Integer nec lobortis magna. Etiam sem metus, hendrerit id maximus id, porta sed nisl. Aliquam placerat lacus sed urna lobortis fermentum. Maecenas justo purus, aliquet at nulla nec, fringilla dictum justo. Nam lacus nunc, faucibus sed gravida at, maximus sollicitudin orci.

Ut pulvinar convallis nisi, sit amet condimentum purus consectetur non. Aenean commodo nunc eget dui mattis facilisis. Nulla facilisi. Vestibulum tempor purus in dictum pulvinar. Mauris venenatis nisl nec ex lacinia, vitae malesuada lectus tempus. Nullam consectetur aliquet dui tincidunt blandit. Phasellus sed bibendum sapien. In nec elit a elit gravida tempor vel eget eros. Ut lectus urna, pretium eu lorem aliquet, fermentum dignissim urna. Nam tristique auctor fermentum. Aliquam cursus lorem ut nunc pretium, id eleifend elit placerat. Cras vehicula, lorem eu congue auctor, turpis justo tincidunt ante, vel tristique sapien erat at risus. Duis ut purus ac nibh dictum dictum eget nec nulla. Integer pulvinar dolor et eros blandit, et iaculis mauris dapibus. Integer pretium nulla sed dignissim sagittis.

Pellentesque interdum erat sit amet accumsan lobortis. Praesent feugiat augue sit amet varius ullamcorper. Phasellus at sodales erat, eu ultrices justo. Aliquam quis ex lorem. Mauris est dui, ullamcorper ut turpis vel, iaculis maximus ex. Nam non vehicula massa. Maecenas ac eleifend ligula, vitae sodales sapien. Nulla varius eleifend magna, id feugiat ante mollis aliquet. Duis sodales, libero in ultrices egestas, tellus nisi rhoncus libero, non pellentesque sem est a neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque ac dui id arcu condimentum cursus.`,
          comments: []
        },
        {
          author: "William Eiffert",
          date: "May 28, 2018",
          title: "Test run 2.0",
          body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut faucibus lacus. Duis tincidunt feugiat nunc, vel maximus turpis dignissim eget. Etiam velit odio, molestie non pharetra id, faucibus eget ipsum. Curabitur accumsan ac massa nec venenatis. Vestibulum a erat sed eros ultricies blandit. Suspendisse sollicitudin dui vitae dapibus fermentum. Morbi sed blandit nisi, non ultrices ante. Nullam viverra sem id ipsum ultricies, quis tempor velit posuere. Integer sit amet sagittis odio. Sed mollis ex mi.

Nulla dolor massa, molestie blandit leo id, laoreet bibendum augue. Curabitur ac semper libero, at dictum nunc. Duis placerat arcu sit amet mauris condimentum faucibus. Pellentesque semper neque sed accumsan accumsan. Vestibulum at est tincidunt, sollicitudin mi eu, sagittis nisi. Donec commodo efficitur dolor, at porttitor nisl ornare vitae. Nullam lacinia tincidunt convallis. Duis efficitur nulla vel feugiat sagittis. Proin in erat condimentum enim iaculis suscipit.

Praesent at posuere nisl. Sed ultricies sed velit sit amet pharetra. Integer nec lobortis magna. Etiam sem metus, hendrerit id maximus id, porta sed nisl. Aliquam placerat lacus sed urna lobortis fermentum. Maecenas justo purus, aliquet at nulla nec, fringilla dictum justo. Nam lacus nunc, faucibus sed gravida at, maximus sollicitudin orci.

Ut pulvinar convallis nisi, sit amet condimentum purus consectetur non. Aenean commodo nunc eget dui mattis facilisis. Nulla facilisi. Vestibulum tempor purus in dictum pulvinar. Mauris venenatis nisl nec ex lacinia, vitae malesuada lectus tempus. Nullam consectetur aliquet dui tincidunt blandit. Phasellus sed bibendum sapien. In nec elit a elit gravida tempor vel eget eros. Ut lectus urna, pretium eu lorem aliquet, fermentum dignissim urna. Nam tristique auctor fermentum. Aliquam cursus lorem ut nunc pretium, id eleifend elit placerat. Cras vehicula, lorem eu congue auctor, turpis justo tincidunt ante, vel tristique sapien erat at risus. Duis ut purus ac nibh dictum dictum eget nec nulla. Integer pulvinar dolor et eros blandit, et iaculis mauris dapibus. Integer pretium nulla sed dignissim sagittis.

Pellentesque interdum erat sit amet accumsan lobortis. Praesent feugiat augue sit amet varius ullamcorper. Phasellus at sodales erat, eu ultrices justo. Aliquam quis ex lorem. Mauris est dui, ullamcorper ut turpis vel, iaculis maximus ex. Nam non vehicula massa. Maecenas ac eleifend ligula, vitae sodales sapien. Nulla varius eleifend magna, id feugiat ante mollis aliquet. Duis sodales, libero in ultrices egestas, tellus nisi rhoncus libero, non pellentesque sem est a neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque ac dui id arcu condimentum cursus.`,
          comments: []
        }
      ]
    };
  }

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

  makeComment = (body) => {
    const date = new Date();
    return {
      author: this.props.username ? this.props.username : "anonymous",
      date: `${date.getHours()}:${date.getMinutes() < 10 ? `0${date.getMinutes()}`: date.getMinutes()} on ${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`,
      body
    }
  }

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

  goToLogin = () => {
    console.log("login");
  };

  goToPost = post => {
    this.setState({
      currentPost: post
    });
  };

  addComment = event => {
    event.preventDefault();
    const currentPost = {...this.state.currentPost};
    const comment = this.makeComment(event.target.comment.value);
    currentPost.comments.push(comment);

    this.setState({
      currentPost
    });

    event.target.reset();
  }

  render() {
    return (
      <div className="Main">
        <Header
          newest={this.goToNewest}
          random={this.goToRandom}
          list={this.goToList}
          login={this.goToLogin}
        />
        {this.state.currentPost ? (
          <Post post={this.state.currentPost} addComment={this.addComment} />
        ) : (
          <List posts={this.state.posts} goToPost={this.goToPost} />
        )}
        <Footer />
      </div>
    );
  }
}

export default Main;
