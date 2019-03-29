import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'

class Posts extends React.Component {
  static propTypes = {
    getUserInfo: PropTypes.func.isRequired
  }

  state = {
    redirectHome: false
  }

  componentDidMount () {
    this.props.getUserInfo()
      .then(userInfo => {
        if (!userInfo) {
          this.setState({ redirectHome: true })
          return
        }

        const Instafeed = require('instafeed.js')
        const feed = new Instafeed({
          get: 'user',
          userId: userInfo.userID,
          accessToken: userInfo.accessToken,
          template: `
            <figure class="dib relative child-opacity-hover-container">
              <a class="post-link" data-caption="{{caption}}" href="/" target="_blank" rel="noopener noreferrer">
                <img src="{{image}}"/>
                <figcaption class="absolute fill flex flex-center child-opacity-hover bg-light t3 small pa1"></figcaption>
              </a>
            </figure>
          `
        })
        feed.run()
        setTimeout(() => {
          this.updateWithInstagramData()
        }, 2000)
      })
  }

  updateWithInstagramData = () => {
    Array.from(document.getElementsByClassName('post-link'))
      .forEach(el => {
        const elLink = el.dataset.caption.match(/\[link: (.*?)\]/)
        let elCaptionText = el.dataset.caption.replace(/\[link: (.*?)\]/, '').trim()

        if (elLink) {
          el.setAttribute('href', elLink[1])
        }

        const elCaption = el.getElementsByTagName('figcaption')[0]
        const elImg = el.getElementsByTagName('img')[0]

        if (elCaptionText.length > 60) {
          elCaptionText = `${elCaptionText.substring(0, 60)}...`
        }

        elImg.setAttribute('alt', elCaptionText)

        if (elCaption.innerText) {
          elCaption.innerText = elCaptionText
        } else {
          elCaption.textContent = elCaptionText
        }
      })
  }

  render () {
    if (this.state.redirectHome === true) {
      return <Redirect to="/" />
    }
    return <main id="instafeed" role="main"></main>
  }
}

export default Posts
