
let i=12;
const func =()=>{
    let i= 2
    console.log(i);
    return "test"
}
// // console.log(12);
// // console.log( func , "func")
// // console.log( func(), "func 2" )


var x= 1

x=5 //reassign
var x=2 //re declare

let y=3
 y=5 // re assign only 


const z=6 // no resign and re declare

Number
String
Boolean

[1, 3]//Array
const test= { id:1,}// object
// // console.log(test)

test.age = 12;
// // console.log(test)

// let carName;
// // console.log(carName)

console.log(1 == "1" ,"==");
console.log(1 === "1");
n=5

let val = n>6 ? '$2.00' : '$10.00'

// // console.log(typeof val, val)


function funcNew (args){

return args *2
}

let new1 = funcNew;
// // console.log(new1(8), "funcNew");


const arrowFunc =(args) =>{

    return  args+2
}

console.log(arrowFunc(3),"arrowFunc")


const obj ={

    value :1,
    normalFunc: function(){
        console.log(this.value, "this value normal")
    },
    arrowFunc:()=>{
        console.log(obj.value, "this value arrow")
    }
}
obj.normalFunc()
obj.arrowFunc()

// const set ={
//     key:"value",
//     name:"siva Hari",
//     age:26,
//     bool: true,
//     func:()=>{
//         return "new fun"
//     },
//     oldFunc:function (){
//         console.log(this.func(), " func called ins old func")
//     },
//     // person:{
//     //     gender:"Male"
//     // }
// }
// set.oldFunc()


// // console.log(set.age);

// // const person ={

// //     firstName:"siva",
// //     lastName:"hari"
// // } // new Object()

// // person.gender= "Male"

// // console.log(person["firstName"], "test name")



// // console.log(person,"person");

// // set.person = {
// //     gender:"male"
// // }

// // set.person = person

// // set.bodyParts= ["head", "neck"]
// // set.habits= undefined


// // // set.name = "thilak";
// // set.age=40;

// // delete set.age
// // // console.log(set, "set")


// // const setName =()=>{
// //     const newName = set.name
// //     // ["siva", "hari"]
// //     set.name =newName.split(" ")[0];
// // }
// // setName()



const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

person.lastName="hari"

// // console.log(person.fullName(),"fullName" )





// // // console.log(set, "set")


// // value ="test"

// // const objTest = {
// //     value: 10,
// //     normalFunc:function (){
// //       console.log(this.value,"this.value normal ");
// //     },
// //     arrowFunc: () => {
// //       console.log(this.value,"this.value arrow"); // 'this' refers to the context where obj was defined
// //     }
// // };


  
// //   objTest.arrowFunc()
// //   objTest.normalFunc()


// //   // document.onload(console.log(123,"onLoad"))

// // // Normal function
// // function Person(name) {
// //     this.name = name;
// //     this.sayName = function() {
// //       console.log(this.name);
// //     };
// // }
  
// //   const person1 = new Person('Alice');
// //   person1.sayName(); // Output: Alice
  
// //   // Arrow function Fails
// //   const PersonArrow = (name) => {
// //     this.name = name;
// //     this.sayName = () => {
// //       console.log(this.name);
// //     };
// //   };
  
// //   try {
// //     const person2 = new PersonArrow('Bob'); 
// //     person2.sayName();
// //   } catch (e) {
// //     console.log(e.message, "error"); 
// //   }


// //   let text = "a,b,c,d,e,f";
// // const myArray = text.split("b");

// // console.log(myArray, "myArray");


// // const fetchApi = async() =>{
// //     const res =  await fetch("https://jsonplaceholder.typicode.com/posts")
// //     console.log(res.json(), "test");
// // }

// // fetchApi();


// // const hour = new Date().getHours(); 
// // let greeting;

// // if ( hour < 18 && hour > 9) {
// //   greeting = "Good day";
// // } else {
// //   greeting = "Good evening";
// // }


// // console.log(greeting, "greet")


// // const getAge =(age)=>{

// //   if(age >0 && age >13){
// //     console.log("child")
// //   }
// //   else if(age >= 13 && age <= 18){
// //     console.log("teens")
// //   }
// //   else{
// //     console.log("adult");
// //   }

// // }

// // const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

// // for (let i = 0; i < cars.length; i++) {
// //   console.log(cars[i] ,i);
// // }

// // const persons = {fname:"John", lname:"Doe", age:25};
// // const numbers = [45, 4, 9, 16, 25];


// // for (let x in numbers) {
// //    console.log(numbers[x] ,x); 
// // }

// // for (let x in persons) {
// //   console.log(persons[x], x);
// // }

// // const typesOfArray = [
// //   {
// //     person:person,
// //     test:"test",
// //     persons:["siva", "hari"]
// //   },
// //   "test",
// //   6,
// //   ["nested Arr"]
// // ];


// // const xx=["z","x","y"]
// // const yy=xx;

// // console.log(typesOfArray[0], "typesOfArray");
// // console.log(yy.sort(),"xy");


// // typesOfArray.forEach((val, index) => {
// //     console.log(val, index);
// // });
// // typesOfArray.forEach((val, index) => {
// //     console.log(val, index);
// // });


let dataBk =[
  {
    name:"siva",
    age:26 ,
  },
  {
    name:"hari",
    age:19,
  },
  {
    name:"glitz",
    age:20,
  }
]


// // dataBk = dataBk.map((val, index) => {
// //   val.name = val.fname+ val.lname
// //   return val 
// // });

// // console.log("dataBk", dataBk)

// // console.log( Array.isArray(typesOfArray), "Array");


// // // {}, [] 


// // console.log(typesOfArray.join(","));


// // const arr1 = ["Emil", "Tobias", "Linus"];
// // const myChildren = arr1.concat("Peter");

// // console.log(myChildren,"myChildren");
// // console.log(arr1,"arr1");




// const arr =[ 
//   "siva", 
//   2,
//   {age:23},// value
//   true
//  ]


//  arr.map((value, index) =>{
//   console.log(value, index);

//  })


const numbers = [
  {
    age:21, name:"siva"
  },

  {
    age:14, name:"hari"
  }
]; 

const getAdults = numbers.filter((person, index) => person.age > 18)
console.log(getAdults)

const overAll18 = numbers.every((person, index) => person.age > 18)

console.log(overAll18, "overAll18");

// reduce (func, intialValue)
const age =[12, 10, 21, 30];
const reduce = age.reduce((acc, cur,) => acc+cur, 0);


const arr =0

for (let index = 0; index < age.length; index++) {
  arr+= age[2]
}

console.log(reduce)

const formOnSubmit= (event)=>{

  event.preventDefault();
  console.log("Form", event.target)
}


