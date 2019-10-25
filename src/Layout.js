import React, { Component } from 'react';
import './App.css';
import Ust from "./components/Ust";
import Footer from "./components/Footer";
class App extends Component {
    render() {
        return (
            <div className="App">
                <Ust />
                {this.props.children}
                <Footer />
            </div>
        );
    }
}
export default App;
