// import logo from './logo.svg';
import "./App.css";
import Slider from "./Components/Slider/Slider";

function App() {
  let data = [
    { id: 1, question: "what is testing1", ans: "code test" },
    { id: 2, question: "what is testing2", ans: "code test" },
    { id: 3, question: "what is testing3", ans: "code test" },
    { id: 4, question: "what is testing4", ans: "code test" },
  ];
  return <div className="App">
    <Slider data={data}/>
  </div>;
}

export default App;
