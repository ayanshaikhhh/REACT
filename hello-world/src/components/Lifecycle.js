import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class Lifecycle extends Component {  // class components

    constructor(props) {
      super(props)
    
      this.state = {
         name: 'vishwas'
      }
      console.log('lifecycle  A constructor')
    }


    static getDerivedStateFromProps(props, state) {
        console.log('lifecycleA getDerivedStateFromProps')
        return null

    } 


    componentDidMount() {
        console.log('lifecycle A componentDidMount');
        
    }


  render() {
    console.log('lifecycleA render');
    return (<div>
        <div>lifecycle A</div>
        <LifecycleB/>
    </div>)
  }
}

export default Lifecycle











































