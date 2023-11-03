import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Menu } from './components/Menu'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className=''>
        <Menu/>
      </div>
    </div>
  )
}

export default App
