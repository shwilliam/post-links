import React from 'react'
import PropTypes from 'prop-types'

class Posts extends React.Component {
  static propTypes = {
    getUserInfo: PropTypes.func.isRequired
  }

  componentDidMount () {
    this.props.getUserInfo()
      .then(userInfo => {
        // TODO: redirect home if userInfo === null
        const Instafeed = require('instafeed.js')
        const feed = new Instafeed({
          get: 'user',
          userId: userInfo.userID,
          accessToken: userInfo.accessToken,
          template: `
            <a class="post-link" data-caption="{{caption}}" href="/">
              <img src="{{image}}" />
            </a>
          `
        })
        feed.run()
        setTimeout(() => {
          this.makeLinks()
        }, 2000)
      })
  }

  makeLinks = () => {
    Array.from(document.getElementsByClassName('post-link'))
      .forEach(el => {
        const elLink = el.dataset.caption.match(/\[link: (.*?)\]/)

        if (elLink) {
          el.setAttribute('href', elLink[1])
        }
      })
  }

  render () {
    return <main id='instafeed' role='main'></main>
  }
}

export default Posts
