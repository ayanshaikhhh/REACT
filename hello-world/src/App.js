import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Hello from './components/Hello.js';
import Welcome from './components/Welcome.js';
import Message from './components/Message.js';
import Counter from './components/Counter.js';
import FunctionClick from './components/FunctionClick.js';
import ClassClick from './components/ClassClick.js';
import EventBind from './components/EventBind.js';
import ParentComponent from './components/ParentComponent.js';
import NameList from './components/NameList.js';   
import Stylesheet from './components/Stylesheet.js';
import Inline from './components/Inline.js';
import './appStyles.css'
import styles from './appStyles.module.css'






function App() {
  return (
    <div className="App">
      {/* <FunctionClick/> */}
      {/* <ClassClick/> */}
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



      {/* <EventBind/> */}
      {/* <ParentComponent/> */}


{/* <NameList/> */}

        <Stylesheet primary={true}/>

        <h1 className='error'>error</h1>
        <h1 className={styles.success}>success</h1>

<Inline/>







    </div>
  );
}

export default App;


