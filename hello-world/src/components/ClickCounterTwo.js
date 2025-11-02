
import React, { Component } from 'react'

class ClickCounterTwo extends Component {






  render() {
    const {count} = this.state
    return (
      <button onClick={this.incrementCount}>
        Clicked {count} Times
        
      </button>
    )
  }
}

export default ClickCounterTwo







































