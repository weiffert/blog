import React from "react";

import Post from './Post';
import List from './List';

class Body extends React.Component {
  state = {
    reading: true
  };

  render() {
    return (
      <div className="Body">
        {this.state.reading ? <Post post={this.props.currentPost} /> : <List />}
      </div>
    );
  }
}

export default Body;
