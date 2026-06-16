import React,{ StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
// import {jsx as _jsx} from 'react/jsx-runtime.js'
import App from './App.jsx'
import { jsx } from 'react/jsx-runtime';


function MyApp(){
    return(
        <div>
            <h1>Custom APP!</h1>
        </div>
    )
}

// const Reactelement={
//     type:'a',
//     props:{
//         href:'https://google.com',
//         target:'_blank'
//     },
//     children:'Click me to visit google now'
// }
const anotheruser="Subhadeep Adhikary"

const reactelement=React.createElement(
    'a',
    {href:'https://google.com',
        target:'_blank'},
    'Click here to visit google',
    anotheruser
)


const anotherElement=(
    <a href="https://google.com" target='_blank'>Visit Google</a>
    
)


createRoot(document.getElementById('root')).render(
   reactelement
)
