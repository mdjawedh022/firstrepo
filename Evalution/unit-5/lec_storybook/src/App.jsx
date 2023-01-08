import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import MyButton from './components/MyButton/MyButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MyButton/>
    </div>
  )
}

export default App
