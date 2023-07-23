import { useState } from 'react'
import './App.css'
import Clock from './Clock'
import BareInput from './BareInput'

function App() {
  // const [name, setName] = useState('Casio')
  // const [visible, setVisible] = useState(true)
  return (
    <div className='App'>
      {/* <button onClick={() => setName('Apple')}>Change name</button>
      <button onClick={() => setVisible(false)}>Hide Clock Component</button>
      {
        visible && <Clock />
      } */}
      <BareInput type='text' value='100' autoFocus className='input-control' onChange={() => { }} />
    </div>
  )
}

export default App
