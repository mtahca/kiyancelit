import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import App from './App'
import Teknik from './Teknik'
import Kat from './Kat'
import Foto from './Foto'
import Iletisim from './Iletisim'
import Notfound from './Notfound'
const routing = (
  <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/foto" component={Foto} />
        <Route path="/teknik" component={Teknik} />
        <Route path="/kat" component={Kat} />
        <Route path="/iletisim" component={Iletisim} />
        <Route component={Notfound} />
      </Switch>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))