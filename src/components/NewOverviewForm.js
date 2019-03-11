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
    ]).isRequired
  }

  constructor (props) {
    super(props)
    this.state = {
      userID: '',
      accessToken: ''
    }
  }

  handleUserIdInput = (event) => {
    this.setState({ userID: event.target.value })
  }

  handleAccessTokenInput = (event) => {
    this.setState({ accessToken: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state.userID, this.state.accessToken)
    // use this.state.userID and this.state.accessToken
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.props.children}
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
        <input type="submit" value="add" />
      </form>
    )
  }
}

export default NewOverviewForm
