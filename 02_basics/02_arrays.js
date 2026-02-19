const marvals_hearos = ["Thor","Ironman","Spaiderman"]
const dc_heros = ["Superman","Flash","Batman"]

//marvals_hearos.push(dc_heros)

// console.log(marvals_hearos);
// console.log(marvals_hearos[3][1]);


// const all_heros=marvals_hearos.concat(dc_heros)
// console.log(all_heros);


const allNewHeros = [...marvals_hearos,...dc_heros]
//console.log(allNewHeros);


const another_Array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array =another_Array.flat(Infinity)
//console.log(real_another_array);


console.log(Array.isArray("Vinay"));
console.log(Array.from("Vinay"));
console.log(Array.from({name :"Vinay"})); //intersting


let score1 =100
let score2 =200
let score3 =300

console.log(Array.of(score1,score2,score3));