/*
* Basic type
*/
//string
let car = "Toyota"
let bike: string
bike = 'Winner'
// bike = 150 -> Loi

//number
let num: number = 10

//boolean
let isLoading: boolean = false

// undefined
//let body:undefined = undefined

//null
let footer: null

//any
let person: any
person = 10
person = 'Something'
person = false

/*
* Object
*/

// let house = {}
// house.address = 'Da Nang'

let house: {
    address: string
    color?: string
} = {
    address: ''
}

house.address = 'Da Nang'

// Array

let products: any[] = []

products.push(1)
products.push('Viet Nam')

// string[]

let names = ['Alex', 'Ben']

let addresses: string[] = []
addresses.push('Da Nang')

//number[]
let numbers: number[] = []
numbers = [1, 2, 3]

//object array
let people: {
    name: string
    age: number
}[] = []
people.push({
    name: 'Ducky',
    age: 27
})

// Function

const sum = (num1: number, num2: number): number => {
    return num1 + num2
}

sum(1, 2)

const sub: (num1: number, num2: number) => number = (
    num1: number, 
    num2: number
    ) => num1 - num2

const handle = () => {
    console.log('123')
}

// Union
let price: string | number | boolean

price = '10'
price = 20
price = false

let body: {name: string | number} | {firstName: string} = {
    firstName: 'Duoc'
}

//Enum
enum Sizes {
    S = 'S',
    M = 'M',
    L = 'L',
    XL = 'XL'
}

let size = Sizes.S

//Interface

// interface State {
//     name: string
//     isLoading: boolean
// }

// let state: State = {
//     name: 'Dang',
//     isLoading: false
// }

//Type

type State {
    name: string
    isLoading: boolean
}

let state: State = {
    name: 'Dang',
    isLoading: false,
}

// Generic Type
const handleClick = <Type>(value: Type) => value

handleClick<number>(3)

//Class
class Person {
    name: string
    readonly money: number
}

class Person1 {
    constructor(public name: string, public age: number) {
        
    }
}



