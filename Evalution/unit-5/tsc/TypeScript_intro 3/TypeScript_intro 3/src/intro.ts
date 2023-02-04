// interface User {
//     type: 'user';
//     name: string;
//     age: number;
//     occupation: string;
// }

// interface Admin {
//     type: 'admin';
//     name: string;
//     age: number;
//     role: string;
// }

class Superuser{
    name: string;
    age: number;
    constructor(name:string, age: number){
        this.name = name;
        this.age = age;
    }

}

type Person = "user"

class User extends Superuser{
    type: Person;
    occupation: string
    constructor(name:string, age: number,type: Person,occupation: string){
        super(name,age)
        this.type = type;
        this.occupation = occupation;
    }
}

type As = "admin"

class Admin extends Superuser{
    type: As;
    role: string
    constructor(name:string, age: number,type: As,role: string){
        super(name,age)
        this.type = type;
        this.role = role;
    }
}

let b1 = new Admin("ram",42,"admin","raug")
console.log(b1)
 