// create a type name with a string

type Data = {name: string}

let student: Data = {
    name: "Rehan"
}

// create a type age with a number

type Data1 = {age:number}

let person: Data1 = {
    age: 42
}

// create a type isFetching with boolean

type Data2 = {isFetching: boolean}

let person2: Data2 = {
    isFetching: true
}

// create an array of numbers

let arr: number[] = [12,25,25,42]

let arr2: Array<number> = [10,15,14]


// create an array of strings (using array constructor generic type)

let arr3: string[] = ["a", "b", "c"]

let arr4: Array<string> = ["a", "b", "c"]

// create a tuple , which keeps a string as the first value, and boolean as the second

let eomployee: [string, boolean] = ["steve", true]

// create an enum
    //   it should have User, SuperUser, Admin, SuperAdmin

    enum Card {
        User = 'Ram',
        SuperUser = "Shyam",
        Admin = 'Aniket',
        SuperAdmin = 'Raghav'
    };

// create a function that takes 2 arguments, x, y both numbers
        //it should return the product of the 2 numbers

        function product(x:number,y:number): number{
            return x*y;
        }

        const product2 = (x:number,y:number):number => {
            return x*y;
        }

// create a function that takes 2 arguments, x ,y both numbers,
// it should divide output ( x / y )

function divide(x:number,y:number): number{
    return x/y;
}

const divide2 = (x:number,y:number):number => {
    return x/y;
}

console.log(divide2(12,25));


// create a function that takes a name and prints it without returning anything

const printSome = ({name, prints}): void => {
    console.log(`${name} ${prints}`)
}