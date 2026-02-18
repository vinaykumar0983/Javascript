// Primitive Data type

// 7 types : String ,Number ,Booolean, Null, Undefined, Symbol, BigInt

const score=2000
const scoreValue=23.43

const isLoggedIn =false
const outSideTemp =null
let userEmail;


const  id = Symbol('123')
const  anotherId = Symbol('123')

console.log(id==anotherId);  //fales
console.log(anotherId);


const bigNumber = 222222234444445677n





// reference(Non primitive)

///Array, Objects,Function

const heros=["shaktiman","naagraj","doga"];
let myObj={
    name:"Vinay",
    age:23


}

const myFuunction=function(){
    console.log("hello Word !");
    
}

console.log(typeof bigNumber);

//https://262.ecma-international.org/5.1/#sec-11.4.3

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive)=> data ki copy banati hai 
// Heap(Non Primitive) => reference milata hai

let myYoutubename="hiteshchoudhary.com"

let anotherName = myYoutubename
anotherName="chaiAurCode"

console.log(myYoutubename);
console.log(anotherName);


let user1={
    email:"user@gamil.com",
    upi:"user@ybl"
}

let user2=user1;

user2.email="Vinay@gmail.com"

console.log(user1);
console.log(user2);



