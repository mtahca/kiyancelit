import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
import './App.css';

class Kat extends Component {
  constructor() {
    super();
    this.state = {
      images: [{
        src: "./katplan/katplan01.jpg",
        thumbnail: "./katplan/katplan01.jpg",
        thumbnailWidth: 220,
        thumbnailHeight: 123,
      },
      {
        src: "/katplan/katplan02.jpg",
        thumbnail: "./katplan/katplan02.jpg",
        thumbnailWidth: 220,
        thumbnailHeight: 123,
      },
      {
        src: "/katplan/katplan03.jpg",
        thumbnail: "./katplan/katplan03.jpg",
        thumbnailWidth: 220,
        thumbnailHeight: 123,
      },
      {
        src: "/katplan/katplan04.jpg",
        thumbnail: "./katplan/katplan04.jpg",
        thumbnailWidth: 220,
        thumbnailHeight: 123,
      },
      {
        src: "/katplan/katplan05.jpg",
        thumbnail: "./katplan/katplan05.jpg",
        thumbnailWidth: 220,
        thumbnailHeight: 123,
      },
      {
        src: "/katplan/katplan06.jpg",
        thumbnail: "./katplan/katplan06.jpg",
        thumbnailWidth: 220,
        thumbnailHeight: 123,
      },
      {
        src: "/katplan/katplan07.jpg",
        thumbnail: "./katplan/katplan07.jpg",
        thumbnailWidth: 220,
        thumbnailHeight: 123,
      },
      {
        src: "/katplan/katplan08.jpg",
        thumbnail: "./katplan/katplan08.jpg",
        thumbnailWidth: 220,
        thumbnailHeight: 123,
      },
      {
        src: "/katplan/katplan09.jpg",
        thumbnail: "./katplan/katplan09.jpg",
        thumbnailWidth: 220,
        thumbnailHeight: 123,
      },

      {
        src: "/katplan/katplan10.jpg",
        thumbnail: "./katplan/katplan10.jpg",
        thumbnailWidth: 220,
        thumbnailHeight: 123,
      }]
    }

  }

  render() {
    return (
      <div className="container box sub">
        <header className="sixteen columns sub-header">
          <div className="eight columns alpha">
            <h3>FOTO GALERİ</h3>
          </div>
        </header>
        <section className="sixteen columns">
          <Gallery images={this.state.images} margin={10} rowHeight={123} />
        </section>
      </div>
    );
  }
}
export default Kat;