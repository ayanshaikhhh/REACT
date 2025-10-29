import React from 'react'
import Person from './Person'

// function NameList() {

//     // const names = ['bruce','clark','diana']
//     // const nameList = names.map(name => <h2>{name}</h2>)

//     const persons = [
//         {
//             id : 1,
//             name : 'bruce',
//             age : 30,
//             skill : 'react'
//         },
//         {
//             id : 2,
//             name : 'clark',
//             age : 25,
//             skill : 'angular'
//         },
//         {
//             id : 3,
//             name : 'mastang',
//             age : 48,
//             skill : 'java'
//         },
//         {
//             id : 4,
//             name : 'wonder',
//             age : 19,
//             skill : 'python'
//         }
//     ]


//     const personList = persons.map(person => <Person key={person.id} person={person} />)

//   return <div> {personList}</div>
// }





function NameList() {
    const names = ['bruce','clark','diana']
    const nameList = names.map(name => <h2 key={name}>{name}</h2>)
    
    return (
        <div>
            {nameList}
        </div>
    )
}

export default NameList

































