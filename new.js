
// ================ new keyword ======================
// It creates a empty object --> 'this' = {}
// returns automatically


function createUser3(firstName, lastName, email, age) {
    // let user =Object.create(createUser3.prototype); // not required
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    // return user;   // not required
}

createUser3.prototype.is18 = function () {
    return this.age >= 18;
}
createUser3.prototype.printFirstName = function () {
    return this.firstName;
}
createUser3.prototype.printLastName = function () {
    return this.printLastName;
}


const Usr10 = new createUser2("ahnaf", "nabil", "yasin.arafat@gmail.com", 16);
const Usr11 = new createUser2("minhaz", "jisun", "minhaz.jisun@gmail.com", 18);
const Usr12 = new createUser2("Fazlul", "Karim", "fazlul.karim@gmail.com", 20);

// console.log(Usr10);
// console.log(Usr11.is18());
// console.log(Usr12.printFirstName());



for (const key in Usr10) {
    // console.log(key);    // prints all the keys including function
    // console.log(Usr10.hasOwnProperty(key)); // 4 ta nijer property, 3 ta prototype er property
    // if (Usr10.hasOwnProperty(key))
        // console.log(key);  //prints all the keys excluding function

}