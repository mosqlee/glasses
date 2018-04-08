import React, { Component } from 'react';
import './App.css';
import {Col,Grid,Row} from 'react-bootstrap';
import NavG from './components/nav/nav';
import Swiper from './components/swiper/swiper';
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavG></NavG>
        <Swiper></Swiper>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
