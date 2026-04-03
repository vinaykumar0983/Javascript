const discripter = Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

//console.log(discripter);


const chai = {
    name : 'Ginger chai',
    price : 250,
    isAvailable : true,

    orderChai : function(){
        console.log("chai nhi bni");
        
    }
}

//console.log(chai);


Object.defineProperty(chai, 'name',{
  //  writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (const [key, value] of Object.entries(chai)) {

    if (typeof value !== "function") {
        console.log(`${key} : ${value}`);
    }   
}