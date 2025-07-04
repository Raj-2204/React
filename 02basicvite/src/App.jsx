import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
 const  [counter, setCounter]= useState(0)
 const addValue = function (){
  setCounter(counter +1)
 }
 const removeValue = function(){
  setCounter(counter - 1)
 }
  return (
    <>
      <h1>React course {counter}</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}
      >Add value</button>{" "}
      <button onClick={removeValue}>remove value</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
