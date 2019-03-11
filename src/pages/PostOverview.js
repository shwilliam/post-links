import React from 'react'
import PropTypes from 'prop-types'

import { FirebaseContext } from '../firebase'
import Posts from '../components/Posts'

class PostOverview extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        username: PropTypes.string.isRequired
      })
    })
  }

  render () {
    return (
      <FirebaseContext.Consumer>
        {firebase => (
          <Posts
            getUserInfo={() => firebase
              .user(this.props.match.params.username)
              .once('value')
              .then((snapshot) => snapshot.val())
            }
          />
        )}
      </FirebaseContext.Consumer>
    )
  }
}

export default PostOverview
