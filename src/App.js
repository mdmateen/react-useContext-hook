import logo from './logo.svg';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import CounterHookTwo from './components/CounterHookTwo';
function App() {
  return (
    <div className="App">
      {/*    <ClassCounter/> */}
      {/*  <HookCounter/> */}
      <CounterHookTwo />
    </div>
  );
}

export default App;
