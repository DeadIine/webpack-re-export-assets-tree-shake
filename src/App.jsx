import React, { Component } from 'react';
import { imageA } from './components/images';

import HelloWorld from './components/hello-world';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <img src={imageA} alt="Dog" />
        <HelloWorld title="Hello from React webpack" />
      </>
    );
  }
}

export default App;
