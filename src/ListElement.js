import React from "react";
import { NavLink } from "react-router-dom";

import "./ListElement.css";

class ListElement extends React.Component {
  render() {
    if (this.props.showDrafts) {
      return (
        <NavLink to={`/posts/${this.props.id}`}>
          <li className="ListElement" key={this.props.id}>
            <h1>{this.props.working.title}</h1>
            <p>{this.props.working.author}</p>
            <p>{this.props.working.date}</p>
            <NavLink to={`/compose/${this.props.id}`}>
              <button className="button">Edit</button>
            </NavLink>
          </li>
        </NavLink>
      );
    } else if (this.props.published.date !== "") {
      return (
        <NavLink to={`/posts/${this.props.id}`}>
          <li className="ListElement" key={this.props.id}>
            <h1>{this.props.published.title}</h1>
            <p>{this.props.published.author}</p>
            <p>{this.props.published.date}</p>
          </li>
        </NavLink>
      );
    }
    return <div />;
  }
}

export default ListElement;
