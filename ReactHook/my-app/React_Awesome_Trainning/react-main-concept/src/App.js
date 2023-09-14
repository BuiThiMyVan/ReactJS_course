import { useState } from 'react'
import './App.css'
import Clock from './Clock'
import BareInput from './BareInput'
import Layout from './Layout'
import BareButton from './BareButton'
import LoginControl from './LoginControl'
import CorrrectlyState from './CorrrectlyState'
import ProductList from './ProductList/ProductList'
import Form from './Form/Form'
import UncontrolledComponent from './Form/UncontrolledComponent'
import Calculator from './Calculator/Calculator'
import FilterableProductTable from './ThinkingInReact/FilterableProductTable'



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
      {/* <Layout>
        <h1>Hello</h1>
        <BareInput type='text' value='100' autoFocus className='input-control' onChange={() => { }} />
        <BareButton />
      </Layout> */}
      {/* <LoginControl isLoggedIn={false} /> */}
      {/* <CorrrectlyState /> */}
      {/* <ProductList /> */}
      {/* <Form /> */}
      {/* <UncontrolledComponent /> */}
      {/* <Calculator /> */}
      <FilterableProductTable />
    </div>
  )
}

export default App
