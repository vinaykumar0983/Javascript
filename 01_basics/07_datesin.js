
let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());

//let myCreatedDate = new Date(2023, 0, 23)
//console.log(myCreatedDate.toDateString());

let myCreatedDate = new Date("02-13-2026")
//console.log(myCreatedDate.toDateString());

let timeStamp = Date.now()

// console.log(timeStamp);
// console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate =new Date()
console.log(newDate);
console.log(newDate.getDate())
console.log(newDate.getMonth())

newDate.toLocatleString('default',{
    weekday:"long"
})

