import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import A from "./components/nav"

function App() {
  const[color,setcolor]=useState("olive")

  return (
   <>
  {/* Navbar */}
  <div className="fixed top-0 left-0 w-full h-16 bg-gray-800 flex items-center px-6 shadow-md">
   <nav className="flex justify-center space-x-4">
      <A onClick={setcolor(Yellow)} color="Yellow"/>
      <A onClick={setcolor(Green)} color="Green"/>
      <A onClick={setcolor(Red)} color="Red"/>
      <A onClick={setcolor(Blue)} color="Blue"/>
      <A onClick={setcolor(Pink)} color="Pink"/>
      <A onClick={setcolor(Grey)} color="Grey"/>
      <A onClick={setcolor(Orange)} color="Orange"/>
      <A onClick={setcolor(Indigo)} color="Indigo"/>
</nav>
  </div>


  <div className="mt-16 border border-black rounded-xl w-screen h-[calc(100vh-4rem)] flex items-center justify-center" style={{backgroundColor:color}}>
  
  </div>
</>

  )
}

export default App
