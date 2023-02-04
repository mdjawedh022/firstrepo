// create a type name with a string
let student = {
    name: "Rehan"
};
let person = {
    age: 42
};
let person2 = {
    isFetching: true
};
// create an array of numbers
let arr = [12, 25, 25, 42];
let arr2 = [10, 15, 14];
// create an array of strings (using array constructor generic type)
let arr3 = ["a", "b", "c"];
let arr4 = ["a", "b", "c"];
// create a tuple , which keeps a string as the first value, and boolean as the second
let eomployee = ["steve", true];
// create an enum
//   it should have User, SuperUser, Admin, SuperAdmin
var Card;
(function (Card) {
    Card["User"] = "Ram";
    Card["SuperUser"] = "Shyam";
    Card["Admin"] = "Aniket";
    Card["SuperAdmin"] = "Raghav";
})(Card || (Card = {}));
;
// create a function that takes 2 arguments, x, y both numbers
//it should return the product of the 2 numbers
function product(x, y) {
    return x * y;
}
const product2 = (x, y) => {
    return x * y;
};
// create a function that takes 2 arguments, x ,y both numbers,
// it should divide output ( x / y )
function divide(x, y) {
    return x / y;
}
const divide2 = (x, y) => {
    return x / y;
};
console.log(divide2(12, 25));
// create a function that takes a name and prints it without returning anything
const printSome = ({ name, prints }) => {
    console.log(`${name} ${prints}`);
};
//# sourceMappingURL=index.js.map