import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import A from "./components/nav"

function App() {
  const[bcolor,setbcolor]=useState("olive")

  return (
   <>
  <div className="fixed top-0 left-0 w-full h-16 bg-gray-800 flex items-center px-6 shadow-md">
   <nav className="flex justify-center space-x-4">
      <A onClick={() => setbcolor("Yellow")} color="Yellow" />
      <A onClick={() => setbcolor("Green")} color="Green" />
      <A onClick={() => setbcolor("Red")} color="Red" />
      <A onClick={() => setbcolor("Blue")} color="Blue" />
      <A onClick={() => setbcolor("Pink")} color="Pink" />
      <A onClick={() => setbcolor("Grey")} color="Grey" />
      <A onClick={() => setbcolor("Orange")} color="Orange" />
      <A onClick={() => setbcolor("Indigo")} color="Indigo" />
</nav>
  </div>


  <div className="mt-16 border border-black rounded-xl w-screen h-[calc(100vh-4rem)] flex items-center justify-center" style={{backgroundColor:bcolor}}>
  
  </div>
</>

  )
}

export default App
