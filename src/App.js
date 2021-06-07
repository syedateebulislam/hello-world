import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet'
import Welcome from './Components/Welcome'
import Hello from './Components/Hello'
import Message from './Components/Message'
import Counter from './Components/Counter'
import FunctionClick from './Components/FunctionClick'
import ClassClick from './Components/ClassClick'
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';

function App() {
  return (
    <div className="App">

      <ParentComponent/>
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