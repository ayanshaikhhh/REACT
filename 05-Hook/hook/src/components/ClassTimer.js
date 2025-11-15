// import React, { Component } from 'react'

// class ClassTimer extends Component {

//     interval

//     constructor(props) {
//       super(props)
    
//       this.state = {
//          timer: 0
//       }
//     }
    

//     componentDidCatch() {
//         this.
//     }


//   render() {
//     return (
//       <div>
        
//       </div>
//     )
//   }
// }

// export default ClassTimer












import React, {useState} from 'react'

function ClassTimer() {

     const [value, setValue ]= useState(0)


    const increment = () => {
        setValue((prev) => prev + 1)
    }

    const decrement = () => {
        setValue((prev) => prev - 1)
    }
    const reset = () => {
        setValue(0)
        
    }


  return (
    <div>
        <h1> {value}</h1>
        <button onClick={increment }>Increment </button>
        <button onClick={decrement } className='descre' disabled = {value === 0}>decrement  </button>
        <button onClick={reset }>reset </button>
      
    </div>
  )
} 

export default ClassTimer





































