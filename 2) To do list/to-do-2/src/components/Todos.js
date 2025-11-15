import React, { useState } from 'react'

const Todos = () => {

    const [initial, setInitial] = useState()
    const [data, setData] = useState([])

    const getInput = (event) => {
        setInitial(event.target.value)

    }

    const getData = () => {
        let store = [...data, initial]
        setData(store)
        setInitial("")
    }

    const handleDelete = (i) => {
        console.log("edit", i)
        let filterData = data.filter((curElem, id) => {
            return id != i

        })
        setData(filterData)

        

    }

    const handleEdit =() => {
        
    }


   
    

    return(
        <>
        <div className="container">
            <div className="inputTask">
                <input type='text' placeholder='Enter Task......' onChange={getInput} value={initial}/>
                <button onClick={getData}>Add</button>
            </div>
        <div className="list">
          <ul>
            {data.map((item, i) => <li key={i}  >{item} <span onClick={() => handleDelete(i)}><i class="fa-solid fa-trash"></i></span> <span onClick={() => handleEdit(i)}><i class="fa-solid fa-pen-to-square"></i></span> </li>)}
          </ul>
        </div>
        </div>

    

        
        </>
    )
}

export default Todos


