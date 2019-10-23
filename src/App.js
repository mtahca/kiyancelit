import React, { Component } from 'react';
import './App.css';
import Ust from "./components/Ust";
import News from "./components/News";
import Callout from "./components/Callout";
import Footer from "./components/Footer";
import Slider from './components/Slider';

class App extends Component {
  render() {
    return (
            <div className="App">
            <Ust/>
            <div className="container box">
            <div className="slider-container sixteen-columns">
            <Slider/>
            </div>
            <News/>
            <Callout/>
            </div>
            <Footer/>
            
            </div>         
    );
  }
}
export default App;