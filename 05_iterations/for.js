// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is best number");
    }
    //console.log(element);
}
    

// for (let index = 0; index <10 ; index ++) {
//     const i = index ;
//     if(index == 9) {
//         console.log(" 9 is best number ")
//     }
//     console.log (i)
    
// }


for (i = 10  ; i<=5; i++){                   
    // console.log(`outer loop value : ${i}`);
    for (let j = 1 ; j <=5 ; j++) {
        // console.log(`Inner loop value ${j} `)
        // console.log(i + '*' + j + ' = ' + i*j );
        // console.log ( i + '*' + j)
        // console.log(i*j)
        

    }
    
}

// loop in Array 

let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}

let Array = [ " Google " , " Microsoft " , " Meta" ]
for (let index  = 0; index  < Array.length; index ++) {
    const  Dreamcompanies  = Array[index ];
    // console.log(Dreamcompanies)
    
}


// break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        // console.log(`Detected 5`);
        break
    }
//    console.log(`Value of i is ${index}`);
    
}


for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        // console.log(`Detected 5`);
        continue
    }
//    console.log(`Value of i is ${index}`);
    
}