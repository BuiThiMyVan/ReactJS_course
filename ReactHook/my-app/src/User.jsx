import React, { useEffect } from 'react'
import { useState } from 'react'

const initialAddress = () => {
  return {
    nation: 'Viet Nam',
    city: {
      street: '200 Dien Bien Phu, Da Nang',
      house: 'Building'
    }
  }
}

const getAddress = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        nation: 'USA',
        city: {
          street: '100 Nicolas, NY',
          house: 'Building'
        }
      })
    }, 3000)
  })
}

export default function User() {
  const [firstName, setFirstName] = useState('Alex')
  const [age, setAge] = useState(24)
  const [address, setAddress] = useState(initialAddress)
  const [, forceRerender] = useState(0)
  const increaseAge = () => {
    setAge((prevAge) => prevAge + 1)
  }
  console.log('Re-render')
  const rerender = () => forceRerender((prevState) => prevState + 1)
  const changeStreet = () => {
    //setAddress((prevAddress) => ({ ...prevAddress, city: 'Ha Noi' }))

    setAddress((prevAddress) => {
      const newCity = { ...prevAddress.city }
      newCity.street = '100 Dien Bien Phu, Da Nang'
      return {
        ...prevAddress,
        city: newCity
      }
    })
  }

  // useEffect(() => {
  //   console.log('useEffect')
  // })

  useEffect(() => {
    console.log('useEffect')
    getAddress().then((res) => {
      setAddress((prevAddress) => {
        const newAddress = { ...address }
        newAddress.city = res.city
        return newAddress
      })
    })
  }, [])

  //
  return (
    <div>
      <h1>User Functional Component</h1>
      <ul>
        <li>First Name: {firstName}</li>
        <li>Age: {age}</li>
        <li>Address: {address.nation}</li>
        <li>City: {address.city.street}</li>
        <li>House: {address.city.house}</li>
      </ul>
      <button onClick={increaseAge}>Increase Age</button>
      <button onClick={rerender}>Rerender</button>
      <button onClick={changeStreet}>Change Street</button>
    </div>
  )
}
