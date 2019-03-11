import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Index from './pages/Index'
import Posts from './pages/Posts'

function App () {
  return (
    <Router>
      <div id='app'>
        <Route path="/" exact component={Index} />
        <Route path="/posts/" component={Posts} />
      </div>
    </Router>
  )
}

export default App
