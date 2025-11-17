// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [input, setInput] = useState("")
  const [list, setList] = useState(() => {
    try {
      const saved = localStorage.getItem("todos");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });





  const [uid, setUid] = useState(null);
  const [update, setUpdate] = useState(false)
  const isDuplicate = list.some(item => item.trim().toLowerCase() === input.trim().toLowerCase());

  const handleInput = (e) => {
    setInput(e.target.value)
  }



    // 🟢 Save data to localStorage whenever list changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(list));
  }, [list]);



const handleTask = () => {
  const trimmed = input.trim();
  if (!trimmed) {
    alert("Please enter a task")
    return;
  }  // blank ignore



  // duplicate check (case-insensitive)
  const exists = list.some(item => item.trim().toLowerCase() === trimmed.toLowerCase());
  if (exists) {
    alert("This task already exists!")
    return;
  } // duplicate -> ignore

  setList(prev => [...prev, trimmed]);
  setInput("");
};



  const handleUpdate = () => {
    const trimmed = input.trim();
    if (!trimmed) {
      alert("Please enter a task to update"); // <-- alert for blank update
      return;
    }
    if (uid === null) return;

    // don't allow updating to a value that duplicates some other item
    const exists = list.some((item, idx) => idx !== uid && item.trim().toLowerCase() === trimmed.toLowerCase());
    if (exists) {
      alert("This task already exists"); // optional
      return; // would create duplicate -> ignore
    }

    setList(prev => prev.map((item, idx) => idx === uid ? trimmed : item));
    setInput("");
    setUid(null);
    setUpdate(false);
  };



  const handleDelete = (i) => {
    const filterList = list.filter((elm) => elm !== list[i])
    setList(filterList)

  }

  const handleEdit = (i) => {
    const filterList = list.filter((elm) => elm === list[i])
    setInput(filterList[0])
    setUid(i)
    setUpdate(true)
  }

  
  return (
    <div className="App">
      <h2>To Do List App</h2>
      <div className="container">
        <div className="input-box">
          <input type='text' value={input} onChange={handleInput} placeholder='Enter Task......'/>
          {update ?   <button onClick={handleUpdate}>Update</button> : <button onClick={handleTask} disabled={isDuplicate}>Add</button>}
          {isDuplicate && <div style={{color:'red'}}>This is allready use</div>}

        </div>

        <div className="list">
          <ul>
            {list.map((item, i) => <li key={i}  >{item} <span onClick={() => handleDelete(i)}><i class="fa-solid fa-trash"></i></span> <span onClick={() => handleEdit(i)}><i class="fa-solid fa-pen-to-square"></i></span> </li>)}
          </ul>
        </div>
        


      </div>
    </div>
  );
}


export default App;
