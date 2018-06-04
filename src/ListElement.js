import React from "react";
import { Link } from "react-router-dom";

import "./ListElement.css";

class ListElement extends React.Component {
  render() {
    return (
      <Link to={`/posts/${this.props.id}`}>
        <li className="ListElement" key={this.props.id}>
          <h1>{this.props.title}</h1>
          <p>{this.props.author}</p>
          <p>{this.props.date}</p>
        </li>
      </Link>
    );
  }
}

export default ListElement;
