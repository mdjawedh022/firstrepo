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
class Superuser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class User extends Superuser {
    constructor(name, age, type, occupation) {
        super(name, age);
        this.type = type;
        this.occupation = occupation;
    }
}
class Admin extends Superuser {
    constructor(name, age, type, role) {
        super(name, age);
        this.type = type;
        this.role = role;
    }
}
let b1 = new Admin("ram", 42, "admin", "raug");
console.log(b1);
//# sourceMappingURL=intro.js.map