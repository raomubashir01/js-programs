// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    // console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    // console.log(`Hello JS user, ${this.name}`);
}

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());



// +++++++++++++++++++++++++++++ practice ++++++++++++++++++++++++++++++


const mysym = Symbol("key2")


const jsuser ={
    name : "muabshir" ,
    "full name" : "muabshirrao" ,
    age : 18 ,
    location : "multan",
    email : "muabshirkhaliq123google.com" ,
    isLoggedIn : false ,
    lastLoginDays : ["monday" , "sunday" ]   ,
   [ mysym ] : "key2" ,
   dreamcar : "buggati" 
}
console.log(jsuser)
console.log( typeof jsuser.email)
console.log( typeof mysym )



jsuser.name = "mube"
// Object.freeze(JsUser)
jsuser.name = "muabshir"
console.log(JsUser);

jsuser.skills = function(){
    console.log("software egnineer");
}
jsuser.hobbies = function(){
    console.log(` drivig luxuries cars, ${this.dreamcar}`);
}

console.log(jsuser.dreamcar)
console.log(jsuser.skills());
console.log(jsuser.hobbies());














