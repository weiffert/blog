import React from "react";

import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <div className="title">
          <h1>blog.</h1>
          <p>
            by <a>William Eiffert</a>
          </p>
        </div>
        <div className="button-group expanded">
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
