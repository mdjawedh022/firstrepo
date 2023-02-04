interface Object {
    title: string;
    status: boolean;
    id: number;
}
type User = {
    firstName: string;
    lastName: string;
};
declare function getName(user: User): string;
declare const user: User;
declare const userFullName: string;
interface Address {
    houseNumber: number;
    street: string;
    city: string;
    state: string;
    postalCode: number;
    country: string;
    type: "asjf" | "fufgah";
}
declare class Address {
    houseNumber: number;
    street: string;
    city: string;
    state: string;
    postalCode: number;
    country: string;
    type: "asjf" | "fufgah";
    constructor(houseNumber: number, street: string, city: string, state: string, postalCode: number, country: string, type: "asjf" | "fufgah");
}
interface PersonDetails {
    Prefix?: string;
    phone: Array<number>;
    addresses: Array<string>;
    email?: string;
    firstname: string;
    lastname: string;
    middlename?: string;
}
declare let arrayofobj: {}[];
declare function PhoneBook<Type>(PersonDetails: Type): Type;
