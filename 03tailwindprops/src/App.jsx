import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Hello Tailwind!
      </h1>
      <h2 className="text-xl text-gray-700 mb-6">
        Counter value: <span className="font-mono text-green-600">0</span>
      </h2>

      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition">
        Add Value
      </button>

      <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 transition">
        Remove Value
      </button>

      <p className="mt-6 text-gray-500 italic">Footer text here</p>
    </div>
  )
}

export default App
