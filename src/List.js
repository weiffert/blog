import React from "react";
import { NavLink } from "react-router-dom";

import "./List.css";

import ListElement from "./ListElement";

class List extends React.Component {
  render() {
    return (
      <div className="List">
        <ul>
          {this.props.showDrafts ? (
            <NavLink to="/compose/new">
              <button className="button primary">Compose New</button>
            </NavLink>
          ) : (
            ""
          )}

          {this.props.posts.map(
            post =>
              post.id != null ? (
                <ListElement
                  {...post.published}
                  author={post.author}
                  id={post.id}
                  showDrafts={this.props.showDrafts}
                />
              ) : (
                ""
              )
          )}
        </ul>
      </div>
    );
  }
}

export default List;
