import logo from './logo.svg';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import UseEffet2 from './components/UseEffet2';
function App() {
  return (
    <div className="App">
      {/*    <ClassCounter/> */}
      {/*  <HookCounter/> */}
      <UseEffet2 count={0}/>
    </div>
  );
}

export default App;
