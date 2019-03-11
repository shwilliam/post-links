import React from 'react'
import app from 'firebase/app'
import 'firebase/database'

const config = {
  apiKey: 'XXXX_XXXX',
  authDomain: 'app-name.firebaseapp.com',
  databaseURL: 'https://app-name.firebaseio.com',
  projectId: 'app-name',
  storageBucket: 'app-name.appspot.com',
  messagingSenderId: 'XXXX'
}

export class Firebase {
  constructor () {
    app.initializeApp(config)
    this.db = app.database()
  }

  user = username => this.db.ref(`users/${username}`)
}

export const FirebaseContext = React.createContext(null)

export default { Firebase, FirebaseContext }
