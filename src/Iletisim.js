import React, { Component } from 'react';
import './App.css';
class Iletisim extends Component {
  render() {
    return (
      <div className="container box sub">
        <header className="sixteen columns sub-header">
          <div className="eight columns alpha">
            <h3>İletişim</h3>
          </div>
        </header>
        <section className="sixteen columns">

          <h3>Kıyanç İnşaat</h3>
          <h4>Orhaniye Mah.Hürriyet Cad.Kahyaoğlu Apt Kat :4 No:15 Muğla</h4>

          <h4>0 252 214 04 48</h4>
          <h4>0 252 214 44 08</h4>

        </section>
        <div id="map_canvas" className="map">

          <iframe frameBorder="0" title="map" style={{ width: "100%", height: "250px" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3177.4570334493915!2d28.36426941549161!3d37.21312405204579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bf7275a64e64a7%3A0xde61712535d337a9!2zS8SxeWFuw6cgxLBuxZ9hYXQ!5e0!3m2!1str!2str!4v1496218856206">
          </iframe>
        </div>
      </div>
    );
  }
}
export default Iletisim;