import React from 'react'
import app from 'firebase/app'
import 'firebase/database'

const config = {
  apiKey: process.env.API_KEY,
  authDomain: 'post-links.firebaseapp.com',
  databaseURL: 'https://post-links.firebaseio.com',
  projectId: 'post-links',
  storageBucket: 'post-links.appspot.com'
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
