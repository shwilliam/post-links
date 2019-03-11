import React from 'react'

const userID = 'XXX'
const accessToken = 'XXX.XX.XXXX'

class Posts extends React.Component {
  componentDidMount () {
    const Instafeed = require('instafeed.js')
    const feed = new Instafeed({
      get: 'user',
      userId: userID,
      accessToken,
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
