// prototype is different from __proto__ or [[prototype]]
// creating object using function and prototype


// const methods = {
//     is18: function () {
//         return this.age >= 18;
//     },
//     printFirstName: function () {
//         return this.firstName;
//     },
//     printLastName: function () {
//         return this.lastName;
//     }

// }

createUser3.prototype.is18 = function () {
    return this.age >= 18;
}
createUser3.prototype.printFirstName = function () {
    return this.firstName;
}
createUser3.prototype.printLastName = function () {
    return this.printLastName;
}

function createUser3(firstName, lastName, email, age) {
    let user =Object.create(createUser3.prototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    return user;
}

const Usr7 = createUser3("Yasin", "Arafat", "yasin.arafat@gmail.com", 16);
const Usr8 = createUser3("minhaz", "jisun", "minhaz.jisun@gmail.com", 18);
const Usr9 = createUser3("Fazlul", "Karim", "fazlul.karim@gmail.com", 20);

// console.log(Usr7);
// console.log(Usr8.is18());
// console.log(Usr9.printFirstName());