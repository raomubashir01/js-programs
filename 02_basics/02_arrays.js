const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]   ////////////////

marvel_heros.push(dc_heros)

console.log(marvel_heros);
console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] 

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);



// console.log(Array.isArray("Hitesh"))
// console.log(Array.from("Hitesh"))
// console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));






// ++++++++++++++++++++++   practice +++++++++++++++++=



// const marvel_heros = ["thor", "Ironman", "spiderman"]
// const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.concat(dc_heros)


// // console.log(marvel_heros);

// const allheros = marvel_heros.concat(dc_heros)
// // console.log(allheros);

// const allnewheros = [...marvel_heros , ...dc_heros]
// // console.log(allnewheros);

// const anotherarray = [1 ,2 [3 , 4 [ 5 , 6  [ 7 ]]]]
// const real_another_Array = another_array . flat (Infinity)
// // console.log(real_another_Array)

// // const array = [ 'rao ' , 'mube']
// console.log (Array.isArray("mubahsir"))
// console.log (Array.from("mube"))
// // console.log (Array.from({name : mubashir }))


// let score1 = 100
// let score2 = 200
// let score3 = 300
// console.log(Array.of(score1 , score2 , score3))
