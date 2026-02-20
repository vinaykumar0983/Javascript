const user ={
    username: "Vinay",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username},Welcome to website`);  
        console.log(this);
        
    }

}

// user.welcomeMessage()
// user.username = "Jatin"
// user.welcomeMessage()

//console.log(this);   // Empty object


// function chai(){
//     let username = "Vinay"
//     console.log(this.username);  // We cannot use this in function only used in Object
    
// }

// chai()

// const chai = function(){
//     let username = "Vinay"
//     console.log(this.username);
// }
// chai()



const chai = () => {           // => Arrow function
    let username = "Vinay"
    console.log(this);
}
//chai()


// const addTwo =(num1,num2) => {
//     return num1 + num2
// }

//const addTwo =(num1,num2) => num1 + num2


// const addTwo =(num1,num2) => (num1 + num2)

const addTwo =(num1,num2) => ({username: "Vishnaoo"})
console.log(addTwo(3,5))


