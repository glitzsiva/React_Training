
let i=12;
const func =()=>{
    let i= 2
    console.log(i);
    return "test"
}
console.log(12);
console.log( func , "func")
console.log( func(), "func 2" )


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
console.log(test)

test.age = 12;
console.log(test)

let carName;
console.log(carName)

console.log(1 == "1" ,"==");
console.log(1 === "1");
n=5

let val = n>6 ? '$2.00' : '$10.00'

console.log(typeof val, val)


function funcNew (args){

return args *2
}

let new1 = funcNew;
console.log(new1(8), "funcNew");


const arrowFunc =(args) =>{

    return  args+2
}

console.log(arrowFunc(3),"arrowFunc")


// const obj ={

//     value :1,
//     normalFunc: function(){
//         console.log(this.value, "this value normal")
//     },
//     arrowFunc:()=>{
//         console.log(obj.value, "this value arrow")
//     }
// }
// obj.normalFunc()
// obj.arrowFunc()

const set ={
    key:"value",
    name:"siva Hari",
    age:26,
    bool: true,
    func:()=>{
        return "new fun"
    },
    oldFunc:function (){
        console.log(this.func(), " func called ins old func")
    },
    // person:{
    //     gender:"Male"
    // }
}
set.oldFunc()


console.log(set.age);

const person ={

    fistName:"siva",
    lastName:"hari"
} // new Object()

person.gender= "Male"


console.log(person,"person");

// set.person = {
//     gender:"male"
// }

set.person = person

set.bodyParts= ["head", "neck"]
set.habits= undefined


// set.name = "thilak";
set.age=40;

delete set.age
console.log(set, "set")


const setName =()=>{
    const newName = set.name
    // ["siva", "hari"]
    set.name =newName.split(" ")[0];
}
setName()



console.log(set, "set")


value ="test"

const objTest = {
    value: 10,
    arrowFunc: () => {
      console.log(this.value,"this.value"); // 'this' refers to the context where obj was defined
    }
};
  
  objTest.arrowFunc()


// Normal function
function Person(name) {
    this.name = name;
    this.sayName = function() {
      console.log(this.name);
    };
  }
  
  const person1 = new Person('Alice');
  person1.sayName(); // Output: Alice
  
  // Arrow function
  const PersonArrow = (name) => {
    this.name = name;
    this.sayName = () => {
      console.log(this.name);
    };
  };
  
  try {
    const person2 = new PersonArrow('Bob'); 
    person2.sayName();
  } catch (e) {
    console.log(e.message); 
  }
  