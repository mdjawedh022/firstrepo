console.log("Hi");


// Number

let a: number = 10;
 
// String

let first_name: string = "masai"
let last_name: string = "school"

let full_name = `${first_name} ${last_name}` //inference check

// Boolean

let checked: boolean = true;

// console.log(full_name);

let value: null = null

let value2: undefined = undefined

// Array

let arr: number[] = [1,2,3,4,5,6,7]

let arrOfStr: string[] = ["a","b","c"]

let arrofNum: Array<number> = [1,2,3,4]

// Number => Constructor Function(if you use capital N in the Number)


// Object

let obj:object = {
    f_name: "Ram",
    address: "Delhi",
    pin: 745620
}

// there are three ways to define the object in the typescript
// object
// object literal
// record

let person: {id: number, name: string,address: string, email?: string} = {
    id:2,
    name: "abc",
    address: 'bcd',
    // email: null
}

person = {
    id:5,
    name: "jjf",
    address: "jads",
    // email: null
}

person.email = "avcf@ymail.com"


// Record

const address:Record<string, string> = {
    city: 'delhi',
    state: 'delhi',
    // pincode: 55221
}


type Data = {id:number, name:string, address: string, email?:string}

let p: Data = {
    id:5,
    name:'rew',
    address: 'dal'
}

let student: Data = {
    id:4,
    name: 'djg',
    address: "fas"
}


// Union - OR

let b: number|string = 'djaskl'

// intersection - AND


type data = {
    id:number,
    store: string,
    products: {id:number,name:string,sold: boolean}[]

}


let cart:data[] = [
    {
        id:1,
        store: 'amazon',
        products: [{id:1,name:'jeans',sold: true}, {id:2,name:'shirt', sold: false}]
    },
    {
        id:2,
        store: 'flipkart',
        products: [{id:1,name:'jeans',sold: true}, {id:2,name:'shirt', sold: false}]
    }
]

// Intersection => AND

type DataPerson = {id:number,name:string,address:string}
type DataStudent = {id:number,skill:string}
// 

let person2: DataPerson & DataStudent  = {
    id:5,
    name:'diao',
    address:'dsa',
    skill:'Frontend'
}

// function

function sum(a:number,b:number): number{
    return a + b;
}

const printSome = ({name, address}:DataPerson): void => {
    console.log(`${name} ${address}`)
}


// Number
// String
// boolean
// Array
// Object
// Fuction
