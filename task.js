//1
var a=5;
if(a%2===0) console.log("Even");
else console.log("Odd");

//2
for(let i=0; i<=100; i++){
    console.log(i);
}

//3
for(let i=0; i<=10; i++){
    console.log(`5*${i}=${i*5}`);
}

//4
let fruits=["apple", "pomogranate", "strawberry", "plum", "banana"];
for(var item of fruits){
    console.log(item);
}

//5
let arr=[1,5,1,3,190,1231,12,11,-5,1,4]
let max=arr[0];
for(var item of arr){
    if(item>max) max=item;
}
console.log(max);

//6
let word="abcddbca";
let flag=true;
for (let i=0; i<Math.floor(word.length/2); i++) {
    if (word[i]!= word[word.length-1-i]) {
        flag=false;
        break;
    }
}
console.log(flag?"Palindrome":"Not Palindrome");

//7
const person={
    Name:"Ali",
    Age:20,
    City:"Baku"
};

//8
function printObject(obj) {
    for (const key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
}

//9
const today = new Date();
const day = String(today.getDate()).padStart(2,'0'); 
const month = String(today.getMonth() + 1).padStart(2,'0'); 
const year = today.getFullYear();  
console.log(`${day}/${month}/${year}`);

//10
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(num=>num%2===0);
console.log(evenNumbers);