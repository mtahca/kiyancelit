import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
import './App.css';
import Ust from "./components/Ust";
import Footer from "./components/Footer";
const IMAGES =
        [{
                src: "./galeri/kiyancelit01.jpg",
                thumbnail: "./galeri/th/kiyancelit01.jpg",
                thumbnailWidth: 220,
                thumbnailHeight: 123,
        },
        {
                src: "/galeri/kiyancelit02.jpg",
                thumbnail: "./galeri/th/kiyancelit02.jpg",
                thumbnailWidth: 220,
                thumbnailHeight: 123,
        },
        {
                src: "/galeri/kiyancelit03.jpg",
                thumbnail: "./galeri/th/kiyancelit03.jpg",
                thumbnailWidth: 220,
                thumbnailHeight: 123,
        },
        {
                src: "/galeri/kiyancelit04.jpg",
                thumbnail: "./galeri/th/kiyancelit04.jpg",
                thumbnailWidth: 220,
                thumbnailHeight: 123,
        },
        {
                src: "/galeri/kiyancelit05.jpg",
                thumbnail: "./galeri/th/kiyancelit05.jpg",
                thumbnailWidth: 220,
                thumbnailHeight: 123,
        },
        {
                src: "/galeri/kiyancelit06.jpg",
                thumbnail: "./galeri/th/kiyancelit06.jpg",
                thumbnailWidth: 220,
                thumbnailHeight: 123,
        },
        {
                src: "/galeri/kiyancelit07.jpg",
                thumbnail: "./galeri/th/kiyancelit07.jpg",
                thumbnailWidth: 220,
                thumbnailHeight: 123,
        },
        {
                src: "/galeri/kiyancelit08.jpg",
                thumbnail: "./galeri/th/kiyancelit08.jpg",
                thumbnailWidth: 220,
                thumbnailHeight: 123,
        },
        {
                src: "/galeri/kiyancelit09.jpg",
                thumbnail: "./galeri/th/kiyancelit09.jpg",
                thumbnailWidth: 220,
                thumbnailHeight: 123,
        },
        {
                src: "/galeri/kiyancelit10.jpg",
                thumbnail: "./galeri/th/kiyancelit10.jpg",
                thumbnailWidth: 220,
                thumbnailHeight: 123,
        },
        {
                src: "/galeri/kiyancelit11.jpg",
                thumbnail: "./galeri/th/kiyancelit11.jpg",
                thumbnailWidth: 220,
                thumbnailHeight: 123,
        },
        {
                src: "/galeri/kiyancelit12.jpg",
                thumbnail: "./galeri/th/kiyancelit12.jpg",
                thumbnailWidth: 220,
                thumbnailHeight: 123,
        },
        {
                src: "/galeri/kiyancelit13.jpg",
                thumbnail: "./galeri/th/kiyancelit13.jpg",
                thumbnailWidth: 220,
                thumbnailHeight: 123,
        },
        {
                src: "/galeri/kiyancelit14.jpg",
                thumbnail: "./galeri/th/kiyancelit14.jpg",
                thumbnailWidth: 220,
                thumbnailHeight: 123,
        },
        {
                src: "/galeri/kiyancelit15.jpg",
                thumbnail: "./galeri/th/kiyancelit15.jpg",
                thumbnailWidth: 220,
                thumbnailHeight: 123,
        },
        {
                src: "/galeri/kiyancelit16.jpg",
                thumbnail: "./galeri/th/kiyancelit16.jpg",
                thumbnailWidth: 220,
                thumbnailHeight: 123,
        },
        {
                src: "/galeri/kiyancelit17.jpg",
                thumbnail: "./galeri/th/kiyancelit17.jpg",
                thumbnailWidth: 220,
                thumbnailHeight: 123,
        },
        {
                src: "/galeri/kiyancelit18.jpg",
                thumbnail: "./galeri/th/kiyancelit18.jpg",
                thumbnailWidth: 220,
                thumbnailHeight: 123,
        },
        {
                src: "/galeri/kiyancelit19.jpg",
                thumbnail: "./galeri/th/kiyancelit19.jpg",
                thumbnailWidth: 220,
                thumbnailHeight: 123,
        },


        {
                src: "/galeri/kiyancelit20.jpg",
                thumbnail: "./galeri/th/kiyancelit20.jpg",
                thumbnailWidth: 220,
                thumbnailHeight: 123,
        }]
class Foto extends Component {
        render() {
                return (
                        <div className="App">
                                <Ust />
                                <div className="container box sub">
                                        <header className="sixteen columns sub-header">
                                                <div className="eight columns alpha">
                                                        <h3>FOTO GALERİ</h3>
                                                </div>
                                        </header>
                                        <section className="sixteen columns">
                                                <Gallery images={IMAGES} rowHeight={123} margin={10} />
                                        </section>
                                </div>
                                <Footer />

                        </div>
                );
        }
}
export default Foto;