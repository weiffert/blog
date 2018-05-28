import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <ul>
          <li>
            <h1>
              Blog.
              <p>by William Eiffert</p>
            </h1>
          </li>
          <li>Newest: {this.props.newestPost.title}</li>
          <li>Random</li>
          <li>List</li>
          <li>
            <button>Log in</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
