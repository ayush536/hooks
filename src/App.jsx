import logo from './logo.svg';
import './App.css';
import Usestate from './components/usestate';
import Useeffect from './components/Useeffect';
import Usememo from './components/Usememo';
import Userefinput from './components/Useref/Userefinput';
import Userefparent from './components/Useref/Userefparent';
import Parent from './components/Usecontext/Parent';


function App() {
  return (
    <div className="App">
      {/* <Userefinput /> */}
      {/* <Usestate /> */}
      {/* <Useeffect /> */}
      {/* <Usememo /> */}
      {/* <Userefparent /> */}
      <Parent />
    </div>
  );
}

export default App;
