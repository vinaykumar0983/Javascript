// let myName = "Vinay    "
// let fullName = "Vinay Kumar   "

// //console.log(myName.trim().length)
// console.log(myName.truelength)


let myHeros = ["thor","spiderman"];

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower : function (){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
    
}

Array.prototype.heyHitesh = function (){
    console.log(`hitesh say Hello`);
}

//heroPower.hitesh()

//myHeros.hitesh()

//myHeros.heyHitesh()
//heroPower.heyHitesh()


const User = {
    chai : "Chai",
    email :"chai@google.com"
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : 'JS assignment',
    fullTime : true,
    __proto__ : TeachingSupport
}

Teacher.__proto__ = User

// modern Syntax

Object.setPrototypeOf(TeachingSupport,Teacher)


let anotherUsername = "chaiAurCode    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
    
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()
