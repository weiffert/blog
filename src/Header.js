import React from "react";

import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <h1 className="title">
          blog.
        </h1>
        <p>
          by <a>William Eiffert</a>
        </p>
        <div className="button-group">
          <button className="button alert">
            <i className="far fa-clock" />
            <p>Newest</p>
          </button>
          <button className="button warning">
            <i className="fas fa-random" />
            <p>Random</p>
          </button>
          <button className="button primary">
            <i className="fas fa-list" />
            <p>List</p>
          </button>
          <button className="button success">
            <i className="fas fa-sign-in-alt" />
            <p>Login</p>
          </button>
        </div>
      </div>
    );
  }
}

export default Header;
