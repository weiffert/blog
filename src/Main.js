import React from 'react';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';

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
