import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import Hello from './Components/Hello'

function App() {
  return (
    <div className="App">

      <Greet name="arif" surname="Jamal"></Greet>
      <Greet name="syed" surname="islam"></Greet>
      <Greet name="Md" surname="aqib"></Greet>

      <Welcome name="arif" surname="Jamal"></Welcome>
      <Welcome name="syed" surname="islam"></Welcome>
      <Welcome name="Md" surname="aqib"></Welcome>
      
      {/*<Hello/>*/}
      
    </div>
  );
}

export default App;