import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Navbar/Navbar.jsx';
import WrapperMain from './Wrappers/wrapperMain.jsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <WrapperMain />
    </>
  )
}

export default App
