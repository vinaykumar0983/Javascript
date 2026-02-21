const coding = ["js","cpp","python","java","ruby"]

// coding.forEach( function (item) {
//     console.log(item)
// })

// coding.forEach( (item) => {
//     console.log(item)
// } )


function printme(item){
    //console.log(item);
    
}

coding.forEach(printme)   // printme() means execute , printme means we give only reference not execute


// coding.forEach( (item , index, arr) => {
//       console.log(item , index, arr);
      
// } )


const myCoding = [
    {
        languageName : "Javascript",
        languageFileName : "js"
    },
    {
        languageName : "Java",
        languageFileName : "java"
    },
    {
        languageName : "Python",
        languageFileName : "py"
    }
]

myCoding.forEach((item)=> {
    console.log(item.languageFileName);
    
})