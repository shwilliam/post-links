import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'

import './styles/reset.css'
import './styles/global.css'

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()