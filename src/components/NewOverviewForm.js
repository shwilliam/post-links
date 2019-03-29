import React from 'react'
import Reward from 'react-rewards'
import PropTypes from 'prop-types'

// TODO: validate inputs & notify user of requirements

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

    this.reward.rewardMe()
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
            min="30"
            required
          />
        </label>
        <label>
            Access token:
          <input
            type="text"
            value={this.state.accessToken}
            onChange={this.handleAccessTokenInput}
            min="5"
            required
          />
        </label>
        <button type="submit">Add</button>
        <Reward
          ref={(ref) => { this.reward = ref }}
          type='confetti'
        />
      </form>
    )
  }
}

export default NewOverviewForm
