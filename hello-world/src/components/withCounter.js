import React from "react"

const UpdatedComponent = (OriginalComponent, incrementNumber) => {

    class NewComponent extends React.Component {
         constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    incrementCount = () => {
        this.setState(prevState => {
            return {count : prevState.count + incrementNumber}
        })
    }

        render() {
            console.log(this.props.name);
            
            return <OriginalComponent count={this.state.count} incrementCount={this.incrementCount} {...this.props} />
        }
    }
    return NewComponent
}

export default UpdatedComponent






















































// const UpdatedComponent = OriginalComponent => {
//     class NewComponent extends React.Component {
//         render() {
//             return <OriginalComponent/>
//         }
//     }
//     return NewComponent
// }

















