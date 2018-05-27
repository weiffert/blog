import React from 'react';

class Main extends React.Component {
  state = {
    posts: [

    ],
  }

  makeBlankPost() {
    return {
      author: '',
      date: '',
      title: '',
      body: ''
    };
  }

  render() {
    return (
      <div className="Main">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default Main;
