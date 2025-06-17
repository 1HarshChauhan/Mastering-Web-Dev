let harshChauhan=true;
//this is comment
const harsh=10;
console.log(harshChauhan);
console.log("this is not editable variable",harsh)
console.log(2**4);
console.log(10+undefined) //null by youu, undefined by js

console.log(10=='10')
console.log(10==='10')

//basic calculator
// const firstNumber=parseInt(prompt("enter the first number: "));
// const secondNumber=parseInt(prompt("enter the second number: "));
// let cond=parseInt(prompt("enter 1 to add, 2 for subtract, 3 for mul, 4 for div, 5 for rem, 6 for power ,0 to stop"));
// while(cond){
//     if(cond===1) console.log(firstNumber+secondNumber,"\n")
//     else if(cond===2) console.log(firstNumber-secondNumber,"\n")
//     else if(cond===3) console.log(firstNumber*secondNumber,"\n")
//     else if(cond===4) console.log(firstNumber/secondNumber,"\n")
//     else if(cond==5) console.log(firstNumber%secondNumber,"\n")
//     else console.log(firstNumber**secondNumber)
//     cond=parseInt(prompt("enter 1 to add, 2 fo subtract, 3 for mul, 4 for div, 5 for rem,6 for power, 0 to stop"));
// }

let x='harsh'
let y='chauhan'
console.log(x+' '+y)
console.log(x.split('').join('*'))
console.log(x.slice(1,4))
console.log(`hello ,
    this is my name ${x} 
    and my surname is ${y}`.toUpperCase())
console.log(`hello ,
    this is my name ${x} 
    and my surname is ${y}`.includes('hars'))
console.log(x.length)
let num=10
console.log(typeof num)
console.log(typeof num.toString())
console.log(typeof parseInt(num.toString()))
console.log(parseFloat(num.toString()))

arr=["apple","banana","mango","al"]
for(let i=0;i<arr.length;i++){
    switch(arr[i]){
        case "apple":
            console.log("we found a apple");
            break;
        case "mango":
            console.log("we found a mango");
            break;
        case "banana":
            console.log("we found a banana");
            break;
        default:
            console.log("different fruit")
    }

}
let fruits=["apple","banana"]
console.log(fruits.push("mango"))
console.log(fruits.unshift("firrst element"))
console.log(fruits.includes("apple"))
console.log(fruits.slice(0,3))
console.log(fruits.pop())
console.log(fruits.shift())
console.log(fruits)
let foody=fruits.concat(["pizza","burger","mojito"])
console.log(foody)
fruits.sort()
fruits.reverse()
console.log(fruits.join(" and "))
foody.splice(1,2,"cs","js") //start,delete count, elements to insert
console.log(foody)

let personDetails={
    firstName:"Harsh",
    lastName:"Chauhan",
    location:"India",
}
personDetails.hobby=['cs','football']
delete personDetails.location
console.log(personDetails)

function greet(name,time){
    console.log(`good${time},${name} sir`);
    return 5;
}
greet('harsh','morning')

//callback function are function as a parameter to a function

function main(value,cb){
    cb(value);
}
function callback(value){
    console.log(`this is the value passed by the function ${value}`)
}
main(20,callback)

people={
    name:'Harsh',
    age:21,
    hello:function (){
        return `hello, my name is ${people.name} and my age is ${people.age}`;
    }
}

console.log(people.hello())
let json=JSON.stringify(personDetails) //object to json
console.log(json)
let obj=JSON.parse(json) //json to object
console.log(obj)


//Dates & Time in JS
let date=new Date(2022,7,12,8,32,36,79)
console.log(date)
date=new Date()
console.log(`Today's date is  ${date}`)
let years=date.getFullYear()
let month=date.getMonth()
let day=date.getDay()
let dete=date.getDate()
let hours=date.getHours()
let ms=date.getMilliseconds()

console.log(`today is ${years} years, ${month} months, ${day} day , ${dete} date , ${hours} hours and ${ms} millisecond`)
const currentDate=new Date();
date.setHours(date.getHours()+100000);
console.log(date)



let count=3;
expiry=count+2;
const timers=setInterval(()=>{
    console.log(`current time is ${count}s`)
    count--;
},1000)
setTimeout(()=>{
    clearInterval(timers);
    console.log(`timer over!!!!!!!!!!!`)
},expiry*1000)


//Enhanced Object Literal
function getInfo(name="Harsh",age=24){
    return {
        name:name,
        age:age,
        info:function (){
            console.log(`my name is ${name} and age is ${age}`)
        }
    }
}
let alex=getInfo('Alex',25)
alex.info();

function getInfor(name,age){
    return {name,age,info:()=>{console.log(`my name is ${name} and age is ${age}`)}}
}
let helix=getInfor('Helix',35)
helix.info();

//spread(...) break down the group into smaller individual chunks
let friends={harsh:5,tanisha:10,om:3,krishna:4}
let justKnown={alex:1,helix:2}
let acquitance={...justKnown,...friends}
console.log(acquitance)

//rest(...) same syntax as spread, is to give variable function parameter
function personality(name,rollno,...hobbies){
    console.log(`my name is ${name} and roll ${rollno}`)
    console.log(`my hobbies are ${hobbies}`)
}
personality('harsh',27,'animation','singing','piano');

//destructuring array,object and function

function feq(){
    return ["red",'blue','green','yellow','pink','purple']
}
console.log(feq())
let [q,,w,e=3,...r]=feq()
console.log(q,w,e,r)


const obje={name:'harsh',age:20,roll:27,study:'cs'}
let {name:t=30,study:o,...p}=obje;
console.log(obje)
console.log(t,o,p)

function displ({name,age,rollno,study}){
    return console.log(`name is ${name} , roll is ${rollno} , age is ${age} and finally studies at ${study}`)
}
displ(obje)

const movies=[
    {name:'american psycho',year:1997},
    {name:'shawshank redemption',year:1995},
    {name:'breaking bad',season:1,episode:4,year:2010}
]

let [,,{name:n='hello',year:ye=2022}]=movies;
console.log(n,ye);
