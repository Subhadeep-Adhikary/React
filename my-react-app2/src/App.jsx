import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const [counter,setCounter]=useState(15)
  
  // let counter=15;

  const addValue=()=>{
    setCounter(counter+1)
  }

  const reduceValue=()=>{
    if(counter>0){
    setCounter(counter-1);
    }else{
      console.log("The value is minimum")
    }
  }
  return (
    <>
    <h1>Hello React</h1>
    <h2>Counter value: {counter}</h2>

    <button
    onClick={addValue}>Add value{counter}</button>
    <br />
    <button onClick={reduceValue}>Remove value{counter}</button>
    <p>footer {counter}</p>
    </>
  )
}

export default App
