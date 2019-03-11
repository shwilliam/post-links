import React from 'react'
import NewOverviewForm from '../components/NewOverviewForm'

import { FirebaseContext } from '../firebase'

class Index extends React.Component {
  render () {
    return (<>
      <header>
        <h1>Link in bio?</h1>
        <h2>Want to avoid broken references to old Instagram bio links? Easily link to external websites from your Instagram posts in <b>4 easy steps</b>.</h2>
      </header>
      <main role='main'>
        <h3>How?</h3>
        <ol>
          <li>
            <a href='https://instagram.pixelunion.net/' target='_blank' rel='noopener noreferrer'>Get your access token</a>
          </li>
          <li>
            <a href='https://codeofaninja.com/tools/find-instagram-user-id' target='_blank' rel='noopener noreferrer'>Find your user ID</a>
          </li>
          <li>
            <FirebaseContext.Consumer>
              {firebase => (
                <NewOverviewForm
                  // TODO: avoid overwriting exisiting usernames
                  onSubmit={(username, userID, accessToken) => {
                    firebase
                      .user(username)
                      .set({
                        userID,
                        accessToken
                      })
                  }}
                >
                  Add your information to our database
                </NewOverviewForm>
              )}
            </FirebaseContext.Consumer>
          </li>
          <li>
            <b>You&#39;re all set!</b><br/>
            Get started by adding [link: https://someurl.com] to your Instagram post description.<br/>
            You can now visit https://post-links.netlify.com/your-username to view an overview of all your posts with working links!
          </li>
        </ol>
      </main>
    </>)
  }
}

export default Index
