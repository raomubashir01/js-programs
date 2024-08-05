// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// // const regularUser = {
//     email: "some@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "hitesh",
//             lastname: "choudhary"
//         }
//     }
// // }

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// const course = {
//     coursename: "js in hindi",
//     price: "999",
//     courseInstructor: "hitesh"
// }

// course.courseInstructor

// const {courseInstructor: instructor} = course

// console.log(courseInstructor);
// console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]




// +++++++++++++++++++++ practice +++++++++++++++++++


const instauser = {}

instauser . id = "123abc"
instauser . name  = "mubashrirao"
instauser . isLoggedIn = false 

// console.log(instauser)



const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}


// console.log(regularUser.fullname.userfullname.firstname);

const dailyuser = {
    screentime : "3-4 hours" ,
    fullname : {
        userfullname : {
            firstname : "M" ,
            lastname : " muabshir"

            
        }
    }
}

// console.log(dailyuser.fullname.userfullname.firstname.lastname);



const Obj1 = {1: "a", 2: "b"}
const Obj2 = {3: "a", 4: "b"}
const Obj4 = {5: "a", 6: "b"}


// const Obj3 = { Obj1, Obj2 }
// console.log(Obj3)
// const Obj3 = Object.assign({}, Obj1, Obj2, Obj4)
// console.log(Obj3)
const Obj3 = {...Obj1, ...Obj1}
// console.log(obj3);


const user = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "@gmail.com"
    },
    {
        id: 3,
        email: "gmail.com"
    },
]

users[2].email
// console.log(instauser);

// console.log(Object.keys(instauser));
// console.log(Object.values(instauser));
// console.log(Object.entries(instauser));

console.log(instauser.hasOwnProperty('isLoggedIn'));


const course = {
        coursename: "js in hindi",
        price: "999",
        courseInstructor: "hitesh"
    }
    
    course.courseInstructor
    
    const {courseInstructor : instructor} = course
    
    console.log(courseInstructor);
    console.log(instructor);
    
    {
        //     "name": "hitesh",
        //     "coursename": "js in hindi",
        //     "price": "free"
        }


    [
        {},
        {},
        {}
    ]
