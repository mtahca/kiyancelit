import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './App.css';
import Layout from "./Layout";
import Home from "./Home";
import Foto from './Foto'
import Teknik from './Teknik'
import Kat from './Kat'
import Iletisim from './Iletisim'
import Notfound from './Notfound'

export default class App extends Component {
  render() {
    return (

      <Layout>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='foto' component={Foto} />
            <Route path='teknik' component={Teknik} />
            <Route path='kat' component={Kat} />
            <Route path='iletisim' component={Iletisim} />
            <Route path='foto' component={Foto} />
            <Route component={Notfound} />
          </Switch>
        </Router>
      </Layout>
    );
  }
}