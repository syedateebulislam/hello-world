import logo from './logo.svg';
import './App.css';
// import Greet from './Components/Greet'
// import Welcome from './Components/Welcome'
// import Hello from './Components/Hello'
// import Message from './Components/Message'
// import Counter from './Components/Counter'
// import FunctionClick from './Components/FunctionClick'
// import ClassClick from './Components/ClassClick'
// import EventBind from './Components/EventBind';
// import ParentComponent from './Components/ParentComponent';
// import UserGreeting from './Components/UserGreeting';
// import NameList from './Components/NameList';
// import NameList_1 from './Components/NameList_1';
// import Stylesheets from './Components/Stylesheets';
// import Inline from './Components/Inline';
// import './appStyles.css';
// import styles from './appStyles.module.css'
//import Form from './Components/Form';
//import FragmentDemo from './Components/FragmentDemo';
//import Table from './Components/Table';
//import ParentComp from './Components/ParentComp';
//import Refs from './Components/Refs';
//import FocusInput from './Components/FocusInput';
//import PortalDemo from './Components/PortalDemo';
//import Hero from './Components/Hero';
//import ErrorBoundry from './Components/ErrorBoundry';
import ClickCounterz from './Components/ClickCounterz';
import HoverCounter from './Components/HoverCounter';
import WithCounter from './Components/withCounter';


function App() {
  return (
    <div className="App">
      
      <ClickCounterz name='ateeb'/><br/>
      <HoverCounter/>

      {/*<ErrorBoundry>
      <Hero heroName='IronMan'/>
      </ErrorBoundry>
      <ErrorBoundry>
      <Hero heroName='batman'/>
      </ErrorBoundry>
      <ErrorBoundry>
      <Hero heroName='Joker'/>
      </ErrorBoundry>*/}

      {/*<PortalDemo/>*/}
      {/*<FocusInput/>*/}
      {/*<Refs/>*/}
      {/*<ParentComp/>*/}
      {/*<Table/>*/}
      {/*<FragmentDemo/>*/}
      {/*<Form/>*/}
      {/*<h1 className='error'>error</h1>
      <h1 className={styles.success}>success</h1>
      <Inline/>*/}
      {/*<Stylesheets primary = {true}/>*/}
      {/*<NameList_1/>*/}
      {/*<NameList/>*/}
      {/*<UserGreeting/>*/}
      {/*<ParentComponent/>*/}
      {/*<EventBind/>*/}
      {/*<FunctionClick/>
      <ClassClick/>*/}
      {/*<Counter/>*/}
      {/*<Greet name="arif" surname="Jamal">
      <button>subscribe</button>
      </Greet>
      <Greet name="syed" surname="islam"></Greet>
      <Greet name="Md" surname="aqib"></Greet>*/}
      {/*<Welcome name="arif" surname="Jamal"></Welcome>
      <Welcome name="syed" surname="islam"></Welcome>
      <Welcome name="Md" surname="aqib"></Welcome>*/}     
      {/*<Message></Message>*/}
      {/*<Hello/>*/}
      
    </div>
  );
}

export default App;