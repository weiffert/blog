import React from "react";
import { Link } from "react-router-dom";

import "./ListElement.css";

class ListElement extends React.Component {
  render() {
    return (
      <Link to={`/posts/${this.props.post.id}`}>
        <li className="ListElement" key={this.props.post.id}>
          <h1>{this.props.post.title}</h1>
          <p>{this.props.post.author}</p>
          <p>{this.props.post.date}</p>
        </li>
      </Link>
    );
  }
}

export default ListElement;
