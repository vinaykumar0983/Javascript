// singleton
//Object.create


//Object literals
const mysym= Symbol("key1")
const JsUser = {
    name:"Vinay",
    [mysym]:"Mykey",
    "full Name":"Vinay Kumar",   //we cannot access without .
    age:19,
    location:"UP",
    email: "Vinayjeet@gmail.com",
    isLogged:false,
    lastLoginDays:["Monday","Saturday",]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full Name"])
// console.log(JsUser[mysym])

JsUser.email="Vinay@chatgpt.com" //to change value
//Object.freeze(JsUser)            // Not change
JsUser.email="Krishna@gmail.com"

//console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS user")
}

JsUser.greeting2 = function(){
    console.log(`Hello JS user, ${this.name}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());


