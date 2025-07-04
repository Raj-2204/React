import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

const reactElement = {
  type: 'a',
  props:{
      href: 'https://google.com',
      target: '_blank'
  },
  text: 'Click here to visi Google'
}

function MyApp(){
  return(
    <div>
      <h1>Custom React App</h1>
    </div>
  )
}
const anotherElement =(
  <a href="https://google.com" target='_blank'>clickhere</a>
)
createRoot(document.getElementById('root')).render(
  anotherElement
)
