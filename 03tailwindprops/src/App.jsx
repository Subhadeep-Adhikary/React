import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css';
import Card from './component/card'

function App() {
  const [count, setCount] = useState(0)
  let myobjs=[
{name:"Sodium",price:"1399",rating:"3.9"},
{name:"iodine",price:"599",rating:"4.1"},
{ name: "Calcium", price: "799",rating:"3.5" },
{ name: "Potassium", price: "999",rating:"4.3" }
]
  let newar=[1,2,3,4,5]
  return (
    <>
    <h1 classNameName='bg-green-400 text-black p-4 rounded-xl'>My chemicals</h1>
    <div classNameName="text-center">
    <Card obj={myobjs[0]} btnText="Buy now"/>
    <Card obj={myobjs[1]} btnText="Buy now"/>
    <Card obj={myobjs[2]} btnText="Buy now"/>
    <Card obj={myobjs[3]} btnText="Buy now"/>

    </div>
    </>
  )
}

export default App
