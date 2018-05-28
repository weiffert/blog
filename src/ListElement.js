import React from "react";

import "./ListElement.css";

class ListElement extends React.Component {
  render() {
    return (
      <li className="ListElement" key={this.props.post.date}>
        <h1>
          {this.props.post.title}
        </h1>
          <p>
            {this.props.post.author}
          </p>
          <p>
            {this.props.post.date}
          </p>
      </li>
    );
  }
}

export default ListElement;
