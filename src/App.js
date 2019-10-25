import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import Layout from "./Layout";
import Home from "./Home";
import Foto from './Foto'
import Teknik from './Teknik'
import Kat from './Kat'
import Iletisim from './Iletisim'


export default class App extends Component {

  render() {
    return (
      <Layout>

        <Route exact path='/' component={Home} />
        <Route path='/foto' component={Foto} />
        <Route path='/teknik' component={Teknik} />
        <Route path='/kat' component={Kat} />
        <Route path='/iletisim' component={Iletisim} />

      </Layout>
    );
  }
}