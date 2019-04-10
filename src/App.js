import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';

import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          {/* <Comp1 /> */}
          <Comp2 />
        </div>
      </Provider>
    );
  }
}

export default App;
