
// Create an empty array of size n
const arr7 = new Array(7);
// console.log(arr7);

//================== Create set
// set - no duplicates allowed, noly unique elements
//     - no index based iteration
const set1 = new Set([9, 9, 7, 7, 5, 5]);
// console.log(set1);

const set2 = new Set("missisippi");
// console.log(set2);

// add(), has() in set
const arr8 = [3, 4, 4];
set1.add(1);
set1.add(2);
set1.add(arr8);

// console.log(set1);
// console.log(set1.has(5));


//==================== Create Map

// set() method - insert data
// get() method - print data
// Map vs Object - Object has only string or symbol type keys but map can have all type of keys

const Persons = new Map();
Persons.set('Name', 'Minhaz');
Persons.set('Dept', 'CSE');
Persons.set('ID', 1904004);
Persons.set(1, "one");

// console.log(Persons);
// console.log(Persons.get('Name'));
// console.log(Persons.get('ID'));

for (let key of Persons.keys()) {
    // console.log(key, typeof key);
}












