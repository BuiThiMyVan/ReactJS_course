import React, { Component } from 'react'
import ProductItem from './ProductItem'

export class ProductList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      productList: [
        {
          id: '1a',
          name: 'Sony',
          avatar: 'balloon'
        },
        {
          id: '2b',
          name: 'Iphone',
          avatar: 'fireworks'
        },
        {
          id: '3c',
          name: 'Samsung',
          avatar: 'gift'
        }
      ]
    }
  }

  orderProductList = () => {
    this.setState((prevState) => ({
      productList: prevState.productList.sort((a, b) => {
        if (a.name < b.name) return -1
        if (a.name > b.name) return 1
        return 0
      })
    }))
  }

  addProductList = () => {
    this.setState((prevState) => ({
      productList: [
        ...prevState.productList,
        {
          id: '4d',
          name: 'Huawei',
          avatar: 'orange'
        }
      ]
    }))
  }

  render() {
    return (
      <div>
        <h1>ProductList</h1>
        <button onClick={this.orderProductList}>Order Product List</button>
        <button onClick={this.addProductList}>Add Product List</button>
        <div className='product-list'>
          {this.state.productList.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))}
        </div>
      </div>
    )
  }
}

export default ProductList
