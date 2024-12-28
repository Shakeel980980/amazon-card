import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductTab from './productTab.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h2>Block Buster Deal || Shop Now</h2>
      <ProductTab />
    </>
  )
}

export default App
