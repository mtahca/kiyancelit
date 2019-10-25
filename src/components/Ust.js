import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Ust extends Component {
  componentDidMount() {
    window.selectnav();
  }
  render() {
    return (
      <div className="container box">
        <div className="sixteen columns">
          <img src="images/elitlogo01.jpg" alt="Kıyanç Elit Residence" className="logo" />
        </div>
        <div className="sixteen columns">
          <hr />
        </div>
        <nav className="eleven columns main-nav" id="nav">
          <ul className="sf-menu">
            <Link to="/"><li>ANASAYFA</li></Link>
            <Link to="/foto"> <li>FOTO GALERİ</li></Link>
            <Link to="/teknik"> <li>TEKNİK ŞARTNAME</li></Link>
            <Link to="/kat"><li>KAT PLANLARI</li></Link>
            <Link to="/iletisim"><li>İLETİŞİM</li></Link>
          </ul>
        </nav>
      </div >
    )
  }
}
