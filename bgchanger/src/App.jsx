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
 <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
    <header className="fixed top-0 left-0 w-full h-16 bg-gray-800/90 backdrop-blur-md flex items-center justify-center px-6 shadow-lg z-50 border-b border-gray-700">
      <nav className="flex items-center justify-center space-x-3 overflow-x-auto max-w-full py-1 no-scrollbar">
        <A onClick={() => setbcolor("Yellow")} color="Yellow" />
        <A onClick={() => setbcolor("Green")} color="Green" />
        <A onClick={() => setbcolor("Red")} color="Red" />
        <A onClick={() => setbcolor("Blue")} color="Blue" />
        <A onClick={() => setbcolor("Pink")} color="Pink" />
        <A onClick={() => setbcolor("Grey")} color="Grey" />
        <A onClick={() => setbcolor("Orange")} color="Orange" />
        <A onClick={() => setbcolor("Indigo")} color="Indigo" />
      </nav>
    </header>
    <main 
      className="mt-16 flex-1 w-full flex flex-col items-center justify-center transition-colors duration-500 ease-in-out relative"
      style={{ backgroundColor: bcolor }}
    >
      <div className="bg-black/20 backdrop-blur-sm px-8 py-4 rounded-2xl border border-white/10 shadow-2xl text-center">
        <h1 className="text-2xl font-bold tracking-tight text-white drop-shadow-md">
          Active Canvas
        </h1>
        <p className="text-sm text-white/80 mt-1">
          Current: <span className="font-mono font-bold">{bcolor || 'Default'}</span>
        </p>
      </div>
    </main>
  </div>
</>

  )
}

export default App
