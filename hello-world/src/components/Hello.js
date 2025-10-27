import React from "react";



const Hello = () => {
    // return (
    //     <div className="first"> 
    //         <h1> Hello Vishwas</h1>
    //     </div>
    // )

    return React.createElement('div', {id:'firstDiv', className:'firstClass'}, React.createElement('h1',null,'Hello Vishwasssssssss'))
}



export default Hello;




