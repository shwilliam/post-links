import React from 'react'
import PropTypes from 'prop-types'

// TODO:
// - validate inputs & notify user of requirements
// - update success notification

class NewOverviewForm extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
    onSubmit: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {
      username: '',
      userID: '',
      accessToken: ''
    }
  }

  handleUsernameInput = (event) => {
    this.setState({ username: event.target.value })
  }

  handleUserIdInput = (event) => {
    this.setState({ userID: event.target.value })
  }

  handleAccessTokenInput = (event) => {
    this.setState({ accessToken: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmit(this.state.username, this.state.userID, this.state.accessToken)

    this.setState({ username: '', userID: '', accessToken: '' })
    alert('Wohoo! Your Instagram account was successfully added.')
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.props.children}
        <label>
          Username:
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUsernameInput}
            required
          />
        </label>
        <label>
          User ID:
          <input
            type="text"
            value={this.state.userID}
            onChange={this.handleUserIdInput}
            required
          />
        </label>
        <label>
          Access token:
          <input
            type="text"
            value={this.state.accessToken}
            onChange={this.handleAccessTokenInput}
            required
          />
        </label>
        <button type="submit">Add</button>
      </form>
    )
  }
}

export default NewOverviewForm
