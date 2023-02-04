console.log("Hi");
// Number
let a = 10;
// String
let first_name = "masai";
let last_name = "school";
let full_name = `${first_name} ${last_name}`; //inference check
// Boolean
let checked = true;
// console.log(full_name);
let value = null;
let value2 = undefined;
// Array
let arr = [1, 2, 3, 4, 5, 6, 7];
let arrOfStr = ["a", "b", "c"];
let arrofNum = [1, 2, 3, 4];
// Number => Constructor Function(if you use capital N in the Number)
// Object
let obj = {
    f_name: "Ram",
    address: "Delhi",
    pin: 745620
};
// there are three ways to define the object in the typescript
// object
// object literal
// record
let person = {
    id: 2,
    name: "abc",
    address: 'bcd',
    // email: null
};
person = {
    id: 5,
    name: "jjf",
    address: "jads",
    // email: null
};
person.email = "avcf@ymail.com";
// Record
const address = {
    city: 'delhi',
    state: 'delhi',
    // pincode: 55221
};
let p = {
    id: 5,
    name: 'rew',
    address: 'dal'
};
let student = {
    id: 4,
    name: 'djg',
    address: "fas"
};
// Union - OR
let b = 'djaskl';
let cart = [
    {
        id: 1,
        store: 'amazon',
        products: [{ id: 1, name: 'jeans', sold: true }, { id: 2, name: 'shirt', sold: false }]
    },
    {
        id: 2,
        store: 'flipkart',
        products: [{ id: 1, name: 'jeans', sold: true }, { id: 2, name: 'shirt', sold: false }]
    }
];
let person2 = {
    id: 5,
    name: 'diao',
    address: 'dsa',
    skill: 'Frontend'
};
// function
function sum(a, b) {
    return a + b;
}
const printSome = ({ name, address }) => {
    console.log(`${name} ${address}`);
};
// Number
// String
// boolean
// Array
// Object
// Fuction
//# sourceMappingURL=index.js.map