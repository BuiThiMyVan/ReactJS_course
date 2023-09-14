import React, { Component } from 'react'

export class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      address: '',
      food: 'coconut',
      marriage: false
    }
  }

  handleChange = (event) => {
    console.log(event.target.name)
    const { target } = event
    const value = target.type === 'checkbox' ? target.checked : target.value
    const { name } = target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type='text' name='name' value={this.state.name} onChange={this.handleChange} />
          </label>
          <input type='checkbox' name='marriage' checked={this.state.marriage} onChange={this.handleChange} />
          <select name='food' onChange={this.handleChange} value={this.state.food}>
            <option value='grapefruit'>GrapeFruit</option>
            <option value='lime'>Lime</option>
            <option value='coconut'>Coconut</option>
            <option value='mango'>Mango</option>
          </select>
          <input type='submit' value='Submit' />
          <textarea name='address' value={this.state.address} onChange={this.handleChange} />
        </form>
      </div>
    )
  }
}

export default Form
