import React from "react";

class ListElement extends React.Component {
  render() {
    return (
      <li key={this.props.post.date}>
        <h1>
          {this.props.post.title}
          <p>
            by {this.props.post.author} on {this.props.post.date}
          </p>
        </h1>
        <p>{this.props.post.body}</p>
      </li>
    );
  }
}

export default ListElement;
