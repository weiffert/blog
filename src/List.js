import React from "react";
import ListElement from "./ListElement";

class List extends React.Component {
  render() {
    return (
      <div className="List">
        <ul>{this.props.posts.map(post => <ListElement post={post} />)}</ul>
      </div>
    );
  }
}

export default List;
