// ======= default parameter
function add(a, b = 0) {
    return a + b;
}
// console.log(add(6));

// ======== rest parameter (...varName)
function rest(a, b, ...c) {
    // console.log(a, b, c);
}
rest(1, 2, 3, 4, 5, 6, 7, 8);

const addAll = (...numbers) => {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total;
}
const ans = addAll(1, 2, 3, 4, 5, 6);
// console.log(ans);

// =======  param destructuring
const student = {
    name: "minhaz",
    age: 23,
    gender: "male",
}
function show({name, age, gender}) {
    console.log(name, age, gender);
}
// show(person);