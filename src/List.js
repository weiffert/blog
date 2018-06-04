import React from "react";

import "./List.css";

import ListElement from "./ListElement";

class List extends React.Component {
  render() {
    return (
      <div className="List">
        <ul>
          {this.props.posts.map(
            post =>
              post.id != null ? (
                <ListElement {...post.published} author={post.author} id={post.id} />
              ) : (
                ""
              )
          )}
        </ul>
      </div>
    );
  }
}

export default List;
