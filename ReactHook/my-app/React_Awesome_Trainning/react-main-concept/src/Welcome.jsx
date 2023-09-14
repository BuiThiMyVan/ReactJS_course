import React from 'react'

function Welcome(props) {
  return (
    <h1 {...props}>
      Hello, {props.name} - {props.age}
    </h1>
  )
}

// class Welcome extends React.Component {
//   render(props) {
//     return <h1>Hello, {this.props.name}</h1>
//   }
// }

export default Welcome
