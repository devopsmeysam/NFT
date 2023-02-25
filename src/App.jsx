import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Buyer from './pages/Buyer'

function App() {
  // const [count, setCount] = useState(0)
  
  // buyer interface
    // input field for key
    // once the transaction is finished, update prompt
    // button that sends post request
  // interface for seller
    // input key 
    // button to send post

  return (
    <div className="App">
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <Router>
        <Routes>
          <Route path='/' element={<Buyer/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
