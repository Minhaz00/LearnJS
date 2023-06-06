// ================== 1.foreach ==================
// example-1
const arr = [1, 2, 3, 4];
function mulBy2(number, index) {
    console.log(index, number * 2);
}

// arr.forEach(mulBy2);                    // type-1
arr.forEach(function (number, index) {     // type 2
    // console.log(index, number * 2);
});

// example-2
const persons = [
    { name: "minhaz", id: 4 },
    { name: "yasin", id: 10 },
    { name: "omi", id: 14 },
    { name: "nabil", id: 39 },
]

persons.forEach((person) => {     // using arrow func
    // console.log(person.name);
})


// ================== 2. MAP ==================
// a. creates new array
// b. so the function must return something

const num = [1, 2, 3, 4, 5];
// type 1
function Sqr(number) {
    return number * number;
}
// const sqrNum1 = num.map(Sqr);

// type 2
const sqrNum2 = num.map((number) => {
    return number * number;
})
// console.log(sqrNum2);

// type 3 - store users firstname in new array

const personName = persons.map((person) => {
    return person.name;
});
// console.log(personName);



// ================== 3. FILTER ==================
// 1. filter has a callback function
// 2. the function returns boolean value

const N = [1, 2, 3, 4, 5, 6, 7];
const evenNum = N.filter((n) => {
    return n % 2 === 0;
});
// console.log(evenNum);

// ================== 4. REDUCE ==================

// 1. works with all the previous and curr value
const total = N.reduce((result, current) => {
    return result + current;
})
// console.log(total);

const total1 = N.reduce((result, current) => {
    return result + current;
}, 100);
// console.log(total1);

// ================== 5. sort ==================

const nn = [1, 300, 260, 2, 5];
nn.sort(); // converts array elements to stirg and sorts them using ACSII value. (Dictionary Style)
// console.log(nn);

nn.sort((a, b) => a - b); // sort number
// console.log(nn);

const products = [
    { prodID: 1, price: 100 },
    { prodID: 2, price: 500 },
    { prodID: 3, price: 400 },
    { prodID: 4, price: 200 },
]
//sort according to price
products.sort((a, b) => a.price - b.price);
// console.log(products);


// ================== 6. FIND ==================
const findProd = products.find(product => product.prodID === 3);
// console.log(findProd);

// ================== 7. Every ==================

const everyProd = products.every(product => product.price < 600);
// console.log(everyProd);


// ================== 8. Some ==================

const someProd = products.some(product => product.price > 600);
// console.log(someProd);

// ================== 9. Fill ==================

//  1. (fill, start, end)
//  2. change in original array
const arr10 = [1, 2, 3, 4, 5, 6, 7];
arr10.fill(0, 2, 6);
// console.log(arr10);


// ================== 10. Splice ==================

// 1. start, delete, insert
const deletedItem = arr10.splice(2, 3); // delete
// console.log(deletedItem);
arr10.splice(2, 0, 9, 9); // insert
// console.log(arr10);

arr10.splice(2, 3, 5, 5, 6, 5); // insert & delete
// console.log(arr10);

