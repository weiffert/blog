import React from "react";

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
