import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [count, setCount] = useState(0)
 
  const addvalue = () =>{
    setCount(prevcount => prevcount+1)
    setCount(prevcount => prevcount+1)
    setCount(prevcount => prevcount+1)
    setCount(prevcount => prevcount+1)
    setCount(prevcount => prevcount+1)
  }

  const removevalue = () =>{
    setCount(count-1)
  }

  


  return (
    <>
      <h2>The number of times I am right:{count}</h2>
      <button onClick={addvalue}>Add</button>
      <button onClick={removevalue}>Remove</button>
      
      <h2>The number of times Sid is wrong:{count}</h2>
      
    </>
  )
}

export default App
