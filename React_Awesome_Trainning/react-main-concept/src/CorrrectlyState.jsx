import React, { Component } from 'react'

const fetchComments = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(['A', 'B', 'C']), 1000)
  })

export class CorrrectlyState extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
      comments: []
    }
  }

  componentDidMount() {
    console.log('componenentDidMount')
    this.setState((prevState, props) => ({
      count: prevState.count + 1
    }))
    this.setState((prevState, props) => ({
      count: prevState.count + 1
    }))
    fetchComments().then((res) => {
      this.setState((prevState) => ({
        ...prevState,
        comments: res
      }))
    })
  }
  render() {
    console.log(this.state.count)
    return (
      <div>
        <div>CorrrectlyState. Count: {this.state.count}</div>
      </div>
    )
  }
}

export default CorrrectlyState
