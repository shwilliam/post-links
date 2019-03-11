import React from 'react'
import NewOverviewForm from '../components/NewOverviewForm'

class Index extends React.Component {
  render () {
    return (<>
      <header>
        <h1>Link in bio?</h1>
        <h2>Easily link to external websites from your Instagram posts</h2>
      </header>
      <main role='main'>
        How?
        <ol>
          <li>
            <a href='https://instagram.pixelunion.net/' target='_blank' rel='noopener noreferrer'>Get your access token</a>
          </li>
          <li>
            <a href='https://codeofaninja.com/tools/find-instagram-user-id' target='_blank' rel='noopener noreferrer'>Find your user ID</a>
          </li>
          <li>
            <NewOverviewForm>
              Add your information to our database
            </NewOverviewForm>
          </li>
          <li>
            You&#39;re all set! Get started by adding &#39;[link: https://someurl.com]&#39; to your Instagram post description. You can now visit XXXX.com/your-username to view an overview of all your posts with working links!
          </li>
        </ol>
      </main>
    </>)
  }
}

export default Index
