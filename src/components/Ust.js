import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Ust extends Component {
  render() {
    return (
      <div className="container box">
        <div className="sixteen columns">
          <img src="images/elitlogo01.jpg" alt="Kıyanç Elit Residence" />
        </div>
        <div className="sixteen columns">
          <hr />
        </div>
        {/* sdfsf    */}

        {/* czczc */}
        <nav className="eleven columns main-nav" id="nav">
          <ul className="sf-menu">
            <li>ANASAYFA</li>
            <li>FOTO GALERİ</li>
            <li>TEKNİK ŞARTNAME</li>
            <li>KAT PLANLARI</li>
            <li>İLETİŞİM</li>
          </ul>
        </nav>
      </div>
    )
  }
}