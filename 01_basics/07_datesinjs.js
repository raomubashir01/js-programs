// Dates

// let myDate = new Date()
let myDate = new Date ()
// console.log(typeof myDate)
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);
let mycreatedDate = new Date ("01-23-2023" )
// console.log(mycreateDate.toLocaleString())
// let myCreatedDate = new Date(2023, 0, 23 )
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(mycreatedDate.getTime()); 
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay() );

`${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "narrow",}
    
)