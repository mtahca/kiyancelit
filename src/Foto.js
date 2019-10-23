import React, { Component } from 'react';
import './App.css';
import Ust from "./components/Ust";
import Footer from "./components/Footer";
class Foto extends Component {
  render() {
    return (
            <div className="App">
            <Ust/>
            <div className="container box sub">
		<header className="sixteen columns sub-header">
			<div className="eight columns alpha">
				<h3>FOTO GALERİ</h3>
			</div>
		</header>
		<section className="sixteen columns">
		  <p>Hazırlanıyor...</p>
</section>
	</div>
            <Footer/>
            
            </div>         
    );
  }
}
export default Foto;