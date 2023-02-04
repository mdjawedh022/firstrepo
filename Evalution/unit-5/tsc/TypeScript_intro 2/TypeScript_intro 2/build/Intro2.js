// create an interface for an object
// it should accept a title string
// it should accept a status boolean
// it should accept an id number
function getName(user) {
    return `${user.firstName} ${user.lastName}`;
}
const user = {
    firstName: "Ram",
    lastName: "Shami",
};
const userFullName = getName(user);
class Address {
    constructor(houseNumber, street, city, state, postalCode, country, type) {
        this.houseNumber = houseNumber;
        this.street = street;
        this.city = city;
        this.state = state;
        this.postalCode = postalCode;
        this.country = country;
        this.type = type;
    }
}
// create a function PhoneBook
// it should accept PersonDetails type argument
// create an array of objects outside the PhoneBook function, that is expecting PersonDetails objects.
// Push the PersonDetails object in the array, from the function.
let arrayofobj = [
    {}
];
function PhoneBook(PersonDetails) {
    return PersonDetails;
}
//# sourceMappingURL=Intro2.js.map