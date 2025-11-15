import React, { Component } from 'react'
import UpdatedComponent from './withCounter.js'

class ClickCounter extends Component {
    
  render() {
    const {count, incrementCount} = this.props

    return (
    <button onClick={incrementCount}> {this.props.name} click {count} times</button>
    )
    
  }
}

export default UpdatedComponent (ClickCounter,5)





































