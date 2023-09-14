import React, { Component } from 'react'
import TemperatureInput from './TemperatureInput'
import BoilingVerdict from './BoilingVerdict'

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
}

const toCelsius = (fahrenheit) => {
  return (fahrenheit - 32) / 1.8
}

const toFahrenheit = (celsius) => {
  return celsius * 1.8 + 32
}

const tryConvert = (temperature, convertFunc) => {
  const input = parseFloat(temperature)
  if (Number.isNaN(input)) {
    return ''
  }
  let output = convertFunc(input)
  output = Math.round(output * 1000) / 1000
  return output
}

export class Calculator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      temperator: '',
      scale: 'c'
    }
  }

  handleChange = (scale) => (value) => {
    this.setState({
      temperator: value,
      scale
    })
  }

  render() {
    const { scale, temperator } = this.state
    const celsius = scale === 'f' ? tryConvert(temperator, toCelsius) : temperator
    const fahrenheit = scale === 'c' ? tryConvert(temperator, toFahrenheit) : temperator

    return (
      <div>
        <TemperatureInput title={scaleNames.c} temperature={celsius} onTemperatureChange={this.handleChange('c')} />
        <TemperatureInput title={scaleNames.f} temperature={fahrenheit} onTemperatureChange={this.handleChange('f')} />
        <BoilingVerdict celsius={Number(celsius)} />
      </div>
    )
  }
}

export default Calculator
