// import logo from './logo.svg';
import { useEffect, useRef } from "react";
import "./App.css";

function App() {
  const a = useRef(0);

  // const raf = useRef(0);

  // let a = 0;

  useEffect(() => {
    console.log(`this is a ${a.current++}`);   
  }, []);
  return <div className="App"></div>;
}

export default App;
