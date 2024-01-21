import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username:"Simran",
    myBtn:"Click me"
  }
  return (
    <>
      <h1 className='bg-green-300 text-blue-400 pt-3'>Tailwind classes</h1>
      <Card username="mahek" myBtn="Clicked"/>
    </>
  )
}

export default App
