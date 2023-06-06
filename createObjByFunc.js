const methods = {
    is18: function () {
        return this.age >= 18;
    },
    printFirstName: function () {
        return this.firstName;
    },
    printLastName: function () {
        return this.lastName;
    }

}

function createUser(firstName, lastName, email, age) {
    let user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.is18 = methods.is18;
    user.printFirstName = methods.printFirstName;
    user.printLastName = methods.printLastName;

    return user;
}


const Usr1 = createUser("Yasin", "Arafat", "yasin.arafat@gmail.com", 16);
const Usr2 = createUser("minhaz", "jisun", "minhaz.jisun@gmail.com", 18);
const Usr3 = createUser("Fazlul", "Karim", "fazlul.karim@gmail.com", 20);

// console.log(Usr1);
// console.log(Usr2.is18());
// console.log(Usr3.printFirstName());




// ==========  use [[prototype]] concept =========== 

//  here is a problem : if we have 100 of functions, we have to add this manually everytime, instead, we can use [[prototype]] concept;

function createUser2(firstName, lastName, email, age) {
    let user =Object.create(methods); // parameter e data na paile methods theke data retrive korbe
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    return user;
}

const Usr4 = createUser2("Yasin", "Arafat", "yasin.arafat@gmail.com", 16);
const Usr5 = createUser2("minhaz", "jisun", "minhaz.jisun@gmail.com", 18);
const Usr6 = createUser2("Fazlul", "Karim", "fazlul.karim@gmail.com", 20);

// console.log(Usr4);
// console.log(Usr5.is18());
// console.log(Usr6.printFirstName());


// ============= use prototype concept ============
// see prototype.js


// ============= use new concept ============
// see new.js



