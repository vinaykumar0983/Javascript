// for of


// ["", "", ""]
// [{},{},{}]

// const arr=[1,2,3,4,5,6]

// for (const num of arr) {
//     //console.log(num);
    
// }


// const arr1=["Krishna","Naveen","Neha","Shivam"]

// for (const num of arr1) {
//     console.log(num);
    
// }



const greetings = "Hello words!"

for (const i of greetings) {
   // console.log(`Each char is ${i}`)
       
}


// Maps

const map = new Map()     // Values or unique when same value added
map.set('IN','INDIA')
map.set('USA','United state of America')
map.set('Fr','France')

//console.log(map);

for (const [key,value] of map) {
    //console.log(key, ':-', value);
    
}


const myObject= {
    'game1' : 'NFS',
    'game2' : 'Spaiderman'
}

// for (const [key,value] of myObject) {  // Object not iteratiable by forof looop
//     console.log(key,':-',value)
    
// }

