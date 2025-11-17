// import logo from './logo.svg';
import { useMemo, useState } from "react";
import "./App.css";



const nums = new Array(30_000_000).fill(0).map((_, i) => {
  return {
    index: i,
    isMagical: i === 29_000_000,
  };
});

function App() {
  const [numbers, setNumbers] = useState(nums);

  const magical = useMemo(() => 
      numbers.find((item) => item.isMagical === true),[numbers]
);


  
  return (
    <>
      <div>
        <h1>{magical.index}</h1>
      </div>
    </>
  );
}


export default App;


