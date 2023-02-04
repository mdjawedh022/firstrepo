declare class Superuser {
    name: string;
    age: number;
    constructor(name: string, age: number);
}
type Person = "user";
declare class User extends Superuser {
    type: Person;
    occupation: string;
    constructor(name: string, age: number, type: Person, occupation: string);
}
type As = "admin";
declare class Admin extends Superuser {
    type: As;
    role: string;
    constructor(name: string, age: number, type: As, role: string);
}
declare let b1: Admin;
