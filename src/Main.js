import React from "react";

import "./Main.css";

import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

class Main extends React.Component {
  state = {
    posts: [
      {
        author: "William Eiffert",
        date: "May 28, 2018",
        title: "Test run",
        body:
          "How 'bout it? adlfkasj sdlfjas sfjaslkfwej adxj kjdsjs jej wejw qjqwj sdksajds  fjdssdja kj kjjfaks ksjasjej nvmx eke jaekaek"
      }
    ]
  };

  makeBlankPost() {
    return {
      author: "",
      date: "",
      title: "",
      body: ""
    };
  }

  render() {
    return (
      <div className="Main">
        <Header newestPost={this.state.posts[0]} />
        <Body posts={this.state.posts} />
        <Footer />
      </div>
    );
  }
}

export default Main;
