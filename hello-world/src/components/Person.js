import React from 'react'


function Person({person}) {
  return (
    <div>
            <h2>I Am {person.name}. I Am {person.age} years old  and I Am {person.skill} Developer.</h2>
      
    </div>
  )
}

export default Person
