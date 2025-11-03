// import logo from './logo.svg';
// import './App.css';
// import Greet from './components/Greet';
// import Hello from './components/Hello.js';
// import Welcome from './components/Welcome.js';
// import Message from './components/Message.js';
// import Counter from './components/Counter.js';
// import FunctionClick from './components/FunctionClick.js';
// import ClassClick from './components/ClassClick.js';
// import EventBind from './components/EventBind.js';
// import ParentComponent from './components/ParentComponent.js';
// import NameList from './components/NameList.js';   
// import Stylesheet from './components/Stylesheet.js';
// import Inline from './components/Inline.js';
// import './appStyles.css'
// import styles from './appStyles.module.css'
// import Form from './components/Form.js'
// import Lifecycle from './components/Lifecycle.js'
// import FragmentDemo from './components/FragmentDemo.js';
// import Table from './components/Table.js'
// import PureComp from '../src/components/PureComp.js'
// import ParentComp from './components/ParentComp.js'
// import RefsDemo from './components/RefsDemo.js';
// import FocusInput from './components/FocusInput.js';
// import FRParentInput from './components/FRParentInput.js'
// import PortalDemo from './components/PortalDemo.js'
// import Hero from './components/Hero.js'
// import ErrorBoundary from './components/ErrorBoundary.js';
// import ClickCounter from './components/ClickCounter.js'
// import HoverCounter from './components/HoverCounter.js';
// import ClickCounterTwo from './components/ClickCounterTwo.js';
// import HoverCounterTwo from './components/HoverCounterTwo.js';
// import User from './components/User.js';








// function App() {
//   return (
//     <div className="App">
//       {/* <FunctionClick/> */}
//       {/* <ClassClick/> */}
//       {/* <Greet name='wonder' heroName='women'/> */}

// {/* 
//       <Greet name="Bruce" heroName="Batman">
//         <p>This is a children props</p>
//       </Greet>

//       <Greet name="Clark" heroName="Superman">
//         <button>click me </button>
//       </Greet>

//       <Greet name="Diana" heroName="Spiderman"/>

//       <Welcome name='Bruce' heroName='Batman'/>
//       <Welcome name='Clark' heroName='Superman'/>
//       <Welcome name='Diana' heroName='Spiderman'/>

//  */}


//       {/* <Message/> */}

//       {/* <Counter/> */}
//       {/* <Welcome name='Spiderman' heroName='USA'/> */}



//       {/* <EventBind/> */}
//       {/* <ParentComponent/> */}


// {/* <NameList/> */}
// {/* 
//         <Stylesheet primary={true}/>

//         <h1 className='error'>error</h1>
//         <h1 className={styles.success}>success</h1>

// <Inline/>

//  */}


//         {/* // <Form/> */}


// {/* <Lifecycle/> */}


// {/* <FragmentDemo/> */}
// {/* <Table/> */}


// {/* <PureComp/> */}

// {/* <ParentComp/> */}

// {/* <RefsDemo/> */}
// {/* <FocusInput/> */}

// {/* <FRParentInput/> */}


// {/* <PortalDemo/> */}

// {/* 
// <ErrorBoundary>
//             <Hero heroName='batman'/>
// </ErrorBoundary>

// <ErrorBoundary>

//             <Hero heroName='superman'/>
// </ErrorBoundary>

// <ErrorBoundary>

//             <Hero heroName='joker'/>
// </ErrorBoundary> */}


// {/* <ClickCounter name='vishwas'/> */}
// {/* <HoverCounter/> */}

// {/* <ClickCounterTwo/> */}
// {/* <HoverCounterTwo/> */}

// {/* <User render={(isLoggedIn) =>isLoggedIn ? 'vishwas' : 'guest'}/> */}
// {/* 
// <Counter2 render={(count, incrementCount) => (<ClickCounterTwo count={count} incrementCount={incrementCount}></ClickCounterTwo> )}/> */}






//     </div>
//   );
// }

// export default App;









// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
import React, {Component} from 'react'
import './App.css'
import ComponentC from './components/ComponentC'
import { UserProvider } from './components/userContext'

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserProvider value='Vishwas'>
        <ComponentC/>
        </UserProvider>
      </div>
    )
  }
}

export default App







