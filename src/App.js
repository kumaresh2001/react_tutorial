import logo from './logo.svg';
import './App.css';
import Greet from './components/greet'
import Welcome from './components/welcome'
import Message from './components/message'
import Counter from './components/counter'
import ButtonClick from './components/buttonclick'
import EventBindButton from './components/eventbindbutton'
function App() {
  return (
    <div className="App">
      <EventBindButton />
      {//<ButtonClick />
      
      //<Counter />
      
      //<Message />
      
      //<Greet name="KUMARU!!!">
      //<p>hehehe</p>
      //</Greet>
      //<br />
      }
    </div>
  );
}

export default App;
