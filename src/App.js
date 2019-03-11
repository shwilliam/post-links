import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Index from './pages/Index'
import PostOverview from './pages/PostOverview'

function App () {
  return (
    <Router>
      <div id='app'>
        <Route path="/" exact component={Index} />
        <Route path="/:username" component={PostOverview} />
      </div>
    </Router>
  )
}

export default App
