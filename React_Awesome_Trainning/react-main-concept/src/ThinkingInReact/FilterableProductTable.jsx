import React, { Component } from 'react'
import './FilterableProductTable.css'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

const productListMock = [
  { category: 'Sporting Goods', price: '$49.99', stock: true, name: 'Football' },
  { category: 'Sporting Goods', price: '$9.99', stock: true, name: 'Basketball' },
  { category: 'Sporting Goods', price: '$29.99', stock: false, name: 'Baseball' },
  { category: 'Electronics', price: '$99.99', stock: true, name: 'Iphone 5' },
  { category: 'Electronics', price: '$399.99', stock: false, name: 'Ipod Touch' },
  { category: 'Electronics', price: '$199.99', stock: true, name: 'Iphone 7' }
]

const fetchApi = () => Promise.resolve(productListMock)

export class FilterableProductTable extends Component {
  constructor(props) {
    super(props)

    this.state = {
      productList: [],
      searchText: '',
      inStock: false
    }
  }

  componentDidMount() {
    fetchApi().then((res) => {
      this.setState({
        productList: res
      })
    })
  }

  handleChange = (event) => {
    const name = event.target.name
    console.log(name)
    if (name === 'searchText') {
      this.setState({
        searchText: event.target.value
      })
    } else if (name === 'inStock') {
      this.setState({
        inStock: event.target.checked
      })
    }
  }
  render() {
    const { productList, searchText, inStock } = this.state
    return (
      <div className='FilterableProductTable'>
        <SearchBar searchText={searchText} inStock={inStock} handleChange={this.handleChange} />
        <ProductTable
          searchText={searchText}
          inStock={inStock}
          handleChange={this.handleChange}
          productList={productList}
        />
      </div>
    )
  }
}

export default FilterableProductTable
