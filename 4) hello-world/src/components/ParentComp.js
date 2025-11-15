import React, { Component, PureComponent } from 'react'
import RegComp from './RegComp';
import PureComp from './PureComp';
import MemoComp from './MemoComp';

class ParentComp extends PureComponent {


    constructor(props) {
      super(props)
    
      this.state = {
         name: 'vishwas'
      }
    }
    

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'vishwas'
            })

        }, 2000);
    }


  render() {
    console.log('**************************Parent compo')
    return (
      <div>
        parent components
        <MemoComp name={this.state.name}/>
        {/* <RegComp name={this.state.name} >  </RegComp>
        <PureComp name={this.state.name} >  </PureComp> */}
      </div>
    )
  }
}

export default ParentComp





























