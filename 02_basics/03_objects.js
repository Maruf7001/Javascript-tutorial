//singleton


// object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Maruf",
    "full name" : "MD Maruf",
    [mySym]: "mykey1",
    age: 21,
    location: "Jamalpur",
    email: "maruf@gmail.com",
    isLoggedin: false,
    lastLoginDays: ["Monday", "Sunday"]

}


//console.log(JsUser.email);
//console.log(JsUser["email"]); //preferred command
/*console.log(Juser["full name"]);
console.log(Juser.mySym);
console.log(Juser[mySym]);*/

JsUser.email = "marufyoutube@gmail.com"
//Object.freeze(JsUser)
JsUser.email = "hasib@gmail.com"
//console.log(JsUser);


JsUser.greeting = function() {
    console.log("Hello JS user");
    
}

JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
    
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

