import React from "react";

// function Greet() {
//     return <h1> Hello Vishwas</h1>
// }


// const Greet = (props) => {
//     console.log(props)
//     return(
//         <h1>Hello {props.name} abcd {props.heroName} </h1>
//     )

// }

const Greet = props => {
    const {name, heroName} = props
    return (
        <div>
            <h1>
                Hello {name} {heroName}
            </h1>
        </div>
    )
}

export default Greet
















