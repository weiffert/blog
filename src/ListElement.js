import React from "react";
import { NavLink } from "react-router-dom";

import "./ListElement.css";

class ListElement extends React.Component {
  render() {
    return (
      <NavLink to={`/posts/${this.props.id}`}>
        <li className="ListElement" key={this.props.id}>
          <h1>{this.props.title}</h1>
          <p>{this.props.author}</p>
          <p>{this.props.date}</p>
          {this.props.showDrafts ? (
            <NavLink to={`/compose/${this.props.id}`}>
              <button className="button danger">Edit</button>
            </NavLink>
          ) : (
            ""
          )}
        </li>
      </NavLink>
    );
  }
}

export default ListElement;
