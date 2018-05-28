import React from "react";

import "./List.css";

import ListElement from "./ListElement";

class List extends React.Component {
  render() {
    return (
      <div className="List">
        <ul>
          {this.props.posts.map(post => (
            <ListElement post={post} goToPost={this.props.goToPost} />
          ))}
        </ul>
      </div>
    );
  }
}

export default List;
