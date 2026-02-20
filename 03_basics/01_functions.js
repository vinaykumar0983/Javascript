function sayMyName(){
    console.log("V");
    console.log("i");
    console.log("n");
    console.log("a");
    console.log("Y");
}

//sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);  
// }


function addTwoNumbers(number1,number2){
    //  let result=number1+number2
    //  return result 

    return number1+number2
 }


const result =addTwoNumbers(3,5)

//console.log("Result :",result);


function loginUserMessage(username = "Vinay"){                    //Vinay name is the default value 
    if(!username){                                                 //username === undefined
        console.log("PLese enter a username");
        return
    }
    return `${username} just logged in `
}

// console.log(loginUserMessage("Vinay"))
//console.log(loginUserMessage("krishna"))


function calculateCartPrice(...num1){            // ... is a rest operator
    return num1
}

//console.log(calculateCartPrice(200,400,500,600,700));

const user = {
    username : "Naven",  
    price : 199
}

function handleObject(anyobj){
    console.log(`Username is ${anyobj.username} and price ${anyobj.price}`);
}

//handleObject(user)
handleObject({
    username:"vinay",
    price:233
})

const myNewArray = [200,400,500,1000]

function returnSecondValue(getArray){
        return getArray[1]
}

//console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,400,500,1000]))

