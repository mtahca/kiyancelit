import React, { Component } from 'react';
import './App.css';
import Slider from './components/Slider';
import News from "./components/News";
import Callout from "./components/Callout";
class Home extends Component {
    render() {
        return (
            < div className="container box" >

                <Slider />
                <News />
                <Callout />
            </div>
        );
    }
}
export default Home;