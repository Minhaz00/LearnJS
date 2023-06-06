const u1 = {
    key1:"value1",
    key2:"value2",
}
// const u2 = {
//     key3:"value3"
// }


//========= problem: find key1 in u2, if found print, else find it in u1.

let u2 = {};
u2 = Object.create(u1);
u2.key2 = "unique value2";
u2.key3 = "value3";

// console.log(u2.key1); // from u1
// console.log(u2.key2); // from u2
// console.log(u2.key3); // from u2
// console.log(u2); 


//========= __proto__ or [[prototype]]============

// console.log(u2); 
// in u2, u1 is saved in [[prototype]] as we used Object.create(u1)

