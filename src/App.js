import React, { Component } from 'react'
import Home from './Home.js'
import About from './About.js'
import Contact from './Contact.js'
import {
    BrowserRouter,
    Route
} from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
          <Route exact path='/' component={Home}></Route>
          <Route path='/about' component={About}></Route>
          <Route path='/contact' component={Contact}></Route>
      </BrowserRouter>
    )
  }
}

export default App;
