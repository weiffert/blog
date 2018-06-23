import React from "react";
import { NavLink } from "react-router-dom";

import "./ListElement.css";

class ListElement extends React.Component {
  render() {
    return (
      <NavLink to={`/posts/${this.props.id}`}>
        <li className="ListElement" key={this.props.id}>
          {this.props.showDrafts ? (
            <div>
              <h1>{this.props.working.title}</h1>
              <p>{this.props.working.author}</p>
              <p>{this.props.working.date}</p>
            </div>
          ) : (
            <div>
              <h1>{this.props.published.title}</h1>
              <p>{this.props.published.author}</p>
              <p>{this.props.published.date}</p>
            </div>
          )}
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
