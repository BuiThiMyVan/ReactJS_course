import React from 'react'

class LoginButton extends React.Component {
  onClick() {
    console.log('Login')
  }
  render() {
    return <button onClick={this.props.onClick}>Login</button>
  }
}

class LogoutButton extends React.Component {
  onClick() {
    console.log('Logout')
  }
  render() {
    return <button onClick={this.props.onClick}>Logout</button>
  }
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isLoggedIn: false }
  }

  handleLogin = () => {
    this.setState((prevState) => ({
      isLoggedIn: true
    }))
  }

  handleLogout = () => {
    this.setState((prevState) => ({
      isLoggedIn: false
    }))
  }

  render() {
    const { isLoggedIn } = this.state
    let button
    if (isLoggedIn) {
      button = <LogoutButton />
    } else {
      button = <LoginButton />
    }
    return (
      <div className='login-control'>
        {isLoggedIn ? <LogoutButton onClick={this.handleLogout} /> : <LoginButton onClick={this.handleLogin} />}
      </div>
    )
  }
}

export default LoginControl
