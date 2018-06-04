import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <div className="title">
          <h1>log</h1>
          <p>
            by <a>William Eiffert</a>
          </p>
        </div>
        <div className="button-group expanded">
          <NavLink to={`/posts/newest`}>
            <button className="button alert" onClick={this.props.newest}>
              <i className="far fa-clock" />
              <p>Newest</p>
            </button>
          </NavLink>
          <NavLink to="/posts/random">
            <button className="button warning" onClick={this.props.random}>
              <i className="fas fa-random" />
              <p>Random</p>
            </button>
          </NavLink>
          <NavLink to="/posts">
            <button className="button primary" onClick={this.props.list}>
              <i className="fas fa-list" />
              <p>List</p>
            </button>
          </NavLink>
          {this.props.username ? (
            <NavLink to="/compose">
              <button className="button warning" onClick={this.props.compose}>
                <i className="fas fa-plus" />
                <span> </span>
                <i className="fas fa-pencil-alt" />
                <p>Compose</p>
              </button>
            </NavLink>
          ) : (
            ""
          )}
          <NavLink to="sign-in">
            <button className="button success" onClick={this.props.login}>
              <i className="fas fa-sign-in-alt" />
              {this.props.username ? <p>Log out</p> : <p>Log in</p>}
            </button>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Header;
