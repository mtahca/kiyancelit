import React, { Component } from 'react'
import {Link} from 'react-router-dom';

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
              <li><Link to="/">ANASAYFA</Link></li>
              <li><Link to="/Foto">FOTO GALERİ</Link></li>
              <li><Link to="/Teknik">TEKNİK ŞARTNAME</Link></li>
               <li><Link to="/Kat">KAT PLANLARI</Link></li>
              <li><Link to="/Iletisim">İLETİŞİM</Link></li>
            </ul>
          </nav>
        </div>
        )
    }
}
