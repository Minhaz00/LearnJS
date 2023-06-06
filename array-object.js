
// const key = "email";
// let obj = {
//     name: "Minhaz",
//     Age: 23,
//     dept: "CSE",
// }
// obj[key] = "minhaz.jisun@gmail.com";
// console.log(obj);

// -------Loop through object
// for (const key in obj) {
//     console.log(key,":" , obj[key]);
// }


// ----- Object keys and values
// console.log(Object.keys(obj));
// console.log(Object.values(obj));

// ---- make object form variable key and value
// const newKey = "email";
// const email = 'minhaz.jisun@gmail.com';
// let obj1 = {
//     [newKey]: email,
// }
// console.log(obj1);

// ---- spread operator in array
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
// console.log(arr3)

// --- make array form string using spread operator 
const arr4 = ['abc']
const arr5 = [...'abc'];
const arr6 = [...'123456789'];
// console.log(arr4, arr5, arr6);

// --- spread operator in obj
let obj2 = {
    key1: "value1",
    key2: "value2",
    key3: "value3"
}
let obj3 = {
    key1: "valueRepeat",
    key4: "value4",
    key5: "value5"
}
let obj4 = { ...obj2, ...obj3, key6: "value6" };
// console.log(obj4);


// ---- array to obj using spread operator
let obj5 = { ..."abc" };
let obj6 = { ...['item1', "item2", "item3"] };
// console.log(obj5, obj6);

// ---- object destructuring
// 1
// let { key1, key2 } = obj4;
// console.log(key1, key2);
// 2
// let { key3: var1, key4: var2 } = obj4;
// console.log(var1, var2);
// 3
let { key1, key2, ...otherProperties } = obj4;
// console.log(key1, key2, otherProperties);


// ---- Objects in array
let users = [
    { userId: 1, name: "Minhaz", gender: "male" },
    { userId: 2, name: "alia", gender: "female" },
    { userId: 3, name: "kabir", gender: "male" },
]
for (const user of users) {
    // console.log(user);
}
const [user1, user2, user3] = users;
// console.log(user1, user2, user3);

const [{ userId: firstUserId }, , { name: lastUserName }] = users;
// console.log(firstUserId, lastUserName);




// ==== copying object
const ob1 = {
    item1: "value1",
    item2: "value2",
}
const ob2 = Object.assign({}, ob1);

ob1["item3"] = "value3";
// console.log(ob1, ob2);


//==== Optional chaining
const User = {
    Id: 1,
    adress: { location: "hamjarbag" },
}
// console.log(User.Id);

// question mark dile undefined ashe(if there in no data), otherwise error ashe

// console.log(User.adress.location);
// console.log(User?.adress?.location);




// =========== function inside Object
// ex - 01
const OBJ = {
    name: "Minhaz",
    dept: "CSE",
    ID: 1904004,
    about: function () {
        console.log(`My name is ${this.name}. I am in dept of ${this.dept}. My Student ID is ${this.ID}`);
    }
}
// OBJ.about();


// ex - 02
function personInfo() {
    console.log(`My name is ${this.name}. I am in dept of ${this.dept}. My Student ID is ${this.ID}`);
}

const person1 = {
    name: "Minhaz",
    dept: "CSE",
    ID: 1904004,
    about: personInfo
}
const person2 = {
    name: "Yasin",
    dept: "CSE",
    ID: 1904010,
    about: personInfo
}
const person3 = {
    name: "Omi",
    dept: "CSE",
    ID: 1904014,
    about: personInfo
}

// person1.about();
// person2.about();
// person3.about();


// ======== 'this' object
// 'this' denotes the object that is calling the function
// 1.
function MyFunc() {
    console.log(this);
}
// window.MyFunc();

// 2.
// arrow function doesn't have 'this'
const usr1 = {
    name: "minhaz",
    about: () => {
        console.log(this);
        console.log(this.name);
    }
}
// usr1.about(); error: can't find usr1 as object
// usr1.about.call(usr1); error: can't find usr1 as object
