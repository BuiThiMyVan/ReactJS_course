import React from 'react'

class BareButton extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick(event, value) {
    console.log(event)
    console.log(value)
  }
  //   handleClick = (value) => {
  //     console.log(value)
  //   }

  //Currying
  //   handleClick = (value) => () => {
  //     console.log(value)
  //   }
  render() {
    return (
      <div>
        <button onClick={(event) => this.handleClick.bind(event, 'add')}>Add</button>
        <button onClick={this.handleClick.bind(this, 'edit')}>Edit</button>
        <button onClick={this.handleClick.bind(this, 'delete')}>Delete</button>
      </div>
    )
  }
}

export default BareButton
