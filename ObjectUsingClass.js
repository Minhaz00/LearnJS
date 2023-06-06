
// IN JS Class are fake

class createUser4 {
    constructor(firstName, lastName, email, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
    }

    is18() {
        return this.age >= 18;
    }
    printFirstName() {
        return this.firstName;
    }
    printLastName() {
        return this.lastName;
    }
}

const Usr13 = new createUser2("ahnaf", "arafat", "yasin@gmail.com", 16);
const Usr14 = new createUser2("minhaz", "jisun", "minhaz.jisun@gmail.com", 18);
const Usr15 = new createUser2("Fazlul", "Karim", "fazlul.karim@gmail.com", 20);

// console.log(Usr13);
// console.log(Usr14.is18());
// console.log(Usr15.printFirstName());
// console.log(Object.getPrototypeOf(Usr13));