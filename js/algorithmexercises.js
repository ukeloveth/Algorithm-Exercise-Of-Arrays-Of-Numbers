//Questions 1:
//alert("great")
//Given an array of different numbers,remove all duplicated numbers,and return the numbers without duplicate as seen below.
//1. [2,4,5,2,6,3,5]=>[4,3,6]
//2. [1,3,2,1,3,2]=>[]
//3. [2,8,10,7,8,2,7]=>[10]
//4. [6,4,5,6,4,3]=>[5,3]
//5. [4,5,1,5,4,2]=>[1,2]
function duplicateNumbers(mainarr){
    let newArr = [];
    for(let j=0;j<mainarr.length;j++){
        let val = mainarr[j]
        if(newArr.indexOf(val)=== -1){
            newArr.splice(1,2)
            newArr.push(val)
            
            

        }
    }
    return newArr;

}

let test = [2,4,5,2,6,3,5]
//let test =[6,4,5,6,4,3]
 //let test = [2,8,10,7,8,2,7]
//let test =[2,4,5,2,6,3,5]
//let test = [1,3,2,1,3,2]

//let test =[1,2,3,4,5,6,7,8,10,1,2,3,4,5,6,7,8]
console.log(duplicateNumbers(test))


//Questions 2:
//Display the highest character in a given string as seen below
//1. Look{L=1,o=2,k=1}
//2. Drill{D=1,r=1,i=1 |=2}


//Questions 3:
//Given an array of numbers,return the second smallest and second largest numbers in an array
//* [2,3,4,9,7]=>[3,7]
const numVal = [2,3,4,9,7];
let smallVal=[]
let largestVal =[]
const secondSmallerVal = numVal.filter((sumac)=>{
return sumac === 3;
smallVal.push(numVal)
});
console.log(secondSmallerVal)
 
const secondLargestVal = numVal.filter((lamuc)=>{
    return lamuc ===7;
    largestVal.push(numVal)
    
});
console.log(secondLargestVal)

// my second attempt for No3 Question
//const numVal = [2,3,4,9,7];
//let smallVal=[]
//let largestVal =[]
// function secondSmallestNum(numVal){
//     for(let i=0;i<numVal.length;i++){
//         numVal.sort;
//         numVal.indexOf(1)
//         smallVal.push(numVal)
//     }
// return smallVal;
// }
// console.log(secondSmallestNum(numVal))

// function secondLargestNum(numVal){
//     for(let j=0;i<numVal.length;j++){
//         numVal.sort;
//         numVal.indexOf(numVal.length-1);
//         largestVal.push(numVal)

//     }
//     return largestVal;
// }
// console.log(secondLargestNum(numVal))