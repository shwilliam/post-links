import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import * as serviceWorker from './serviceWorker'
import { Firebase, FirebaseContext } from './firebase'

import './styles/reset.css'
import './styles/global.css'
import './styles/utilities.css'

ReactDOM.render((
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>
), document.getElementById('root'))

serviceWorker.unregister()
