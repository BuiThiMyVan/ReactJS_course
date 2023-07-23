import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import Welcome from './Welcome'

// const element = <h1>Hello, world</h1>

const root = ReactDOM.createRoot(document.getElementById('root'))
const element = (
  <div>
    <Welcome name='Sara' age={26} />
    <Welcome name='Helen' age={27} />
    <Welcome name='Susan' age={28} />
  </div>
)

root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
)

// function tick() {
//   const element = <Welcome name='Sara' />

//   root.render(element)
// }

// setInterval(tick, 1000)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
