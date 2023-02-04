// create an interface for an object
// it should accept a title string
// it should accept a status boolean
// it should accept an id number

interface Object {
  title: string;
  status: boolean;
  id: number;
}

// create a function getName
// it should accept an object firstname and lastname
// it should return fullname
// keep lastname optional.
// if lastname does not exist then return only firstname
// make a interface for it
type User = {
  firstName: string;
  lastName: string;
};

function getName(user: User) {
  return `${user.firstName} ${user.lastName}`;
}

const user: User = {
  firstName: "Ram",
  lastName: "Shami",
};

const userFullName = getName(user);

//   create an interface Address
// it takes
// houseNumber
// street
// city
// state
// postalCode
// country
// add appropriate types

interface Address {
  houseNumber: number;
  street: string;
  city: string;
  state: string;
  postalCode: number;
  country: string;
  type: "asjf" | "fufgah";
}

class Address {
  houseNumber: number;
  street: string;
  city: string;
  state: string;
  postalCode: number;
  country: string;
  type: "asjf" | "fufgah";
  constructor(
    houseNumber: number,
    street: string,
    city: string,
    state: string,
    postalCode: number,
    country: string,
    type: "asjf" | "fufgah"
  ) {
    this.houseNumber = houseNumber;
    this.street = street;
    this.city  = city;
    this.state = state;
    this.postalCode = postalCode;
    this.country = country;
    this.type = type;
  }
}

// create a PersonDetails interface
// it should have
// Prefix optional
// phones array of numbers
// addresses array of Addresses
// email optional
// firstname
// lastname
// middlename optional

interface PersonDetails{
    Prefix?: string,
    phone:Array<number>,
    addresses: Array<string>,
    email?: string,
    firstname: string,
    lastname: string,
    middlename?: string

}

// create a function PhoneBook
// it should accept PersonDetails type argument
// create an array of objects outside the PhoneBook function, that is expecting PersonDetails objects.
// Push the PersonDetails object in the array, from the function.

let arrayofobj = [
    {

    }
]

function PhoneBook<Type>(PersonDetails: Type){
    return PersonDetails;
}

