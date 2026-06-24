import React, { Component } from 'react'

export class Usergreetingclass extends Component {
  render() {
    return (
      <div>
        <h2>Hello, {this.props.username}! (Class Component)</h2>
      </div>
    )
  }
}

export default Usergreetingclass

