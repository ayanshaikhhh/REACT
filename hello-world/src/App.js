import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Hello from './components/Hello.js';
import Welcome from './components/Welcome.js';
import Message from './components/Message.js';
import Counter from './components/Counter.js';
import FunctionClick from './components/FunctionClick.js';
import ClassClick from './components/ClassClick.js';


function App() {
  return (
    <div className="App">
      {/* <FunctionClick/> */}
      <ClassClick/>
      {/* <Greet name='wonder' heroName='women'/> */}

{/* 
      <Greet name="Bruce" heroName="Batman">
        <p>This is a children props</p>
      </Greet>

      <Greet name="Clark" heroName="Superman">
        <button>click me </button>
      </Greet>

      <Greet name="Diana" heroName="Spiderman"/>

      <Welcome name='Bruce' heroName='Batman'/>
      <Welcome name='Clark' heroName='Superman'/>
      <Welcome name='Diana' heroName='Spiderman'/>

 */}


      {/* <Message/> */}

      {/* <Counter/> */}
      {/* <Welcome name='Spiderman' heroName='USA'/> */}


    </div>
  );
}

export default App;


