import React,{ StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


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

const reactelement=React.createElement(
    'a',
    {href:'https://google.com',
        target:'_blank'},
    'Click here to visit google'
)

const anotherElement=(
    <a href="https://google.com" target='_blank'>Visit Google</a>
)
createRoot(document.getElementById('root')).render(
   reactelement
)
