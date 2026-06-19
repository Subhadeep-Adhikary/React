import { useState } from 'react'
import './App.css'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Home from './components/home/home'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
     <Outlet />
     <footer />
    </>
  )
}

export default App
