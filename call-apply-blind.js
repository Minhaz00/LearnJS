// ================= call

function about(dept, id) {
    console.log(this.name, this.age, dept, id);
}

const User1 = {
    name: "minhaz",
    age: 10,
}
const User2 = {
    name: "omi",
    age: 15,
}

// passing object in call with other parameters
// about.call(User1, "CSE", 1904004);
// about.call(User2, "CSE", 1904014);



// ================== apply

// same as call
// Just pass the arguments in array form
// about.apply(User1, ["CSE", 1904004]);
// about.apply(User2, ["EEE", 1904014]);


// =================== bind

// returns function 
const Myfun1 = about.bind(User1, "MSE", "1908012");
const Myfun2 = about.bind(User2, "MSE", "1908012");
// Myfun1();
// Myfun2();


const usr = {
    name: "minhaz",
    age: 10,
    about: function () {
        console.log(this.name, this.age);
    }
}

// error: because we are not calling a function, just passing a reference. To call the function we need to use bind.

// const fun = usr.about;
// fun();

// correct way : 
const fun = usr.about.bind(usr);
// fun();