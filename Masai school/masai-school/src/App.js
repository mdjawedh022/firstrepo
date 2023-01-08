
import './App.css';
import Mentor from './Components/Mentor.jsx';
import { Navbar } from './Components/Navbar';
import Skill from './Components/Skill';
import Student from './Components/Student';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Mentor/>
      <Student/>
      <Skill/>
    </div>
  );
}

export default App;
