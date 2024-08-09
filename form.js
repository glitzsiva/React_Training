console.log("form.js")
const formOnSubmit = (event) => {
    event.preventDefault();
    
    const userName = event.target.userName.value;
    const password = event.target.password.value;


    console.log(123);
    const age = event.target.age.value;
    
  
    const gender = event.target.gender.value;
    const fileInput = event.target.fileInput;
 

    console.log(event.target.hobbies, "hobbies", Array.from(event.target.hobbies).filter(checkbox => checkbox.checked));
    const hobbies = Array.from(event.target.hobbies)
                        .filter(checkbox => checkbox.checked)
                        .map(checkbox => checkbox.value);

    const country = event.target.country.value;

    console.log(event.target.languages.selectedOptions);
    const languages = Array.from(event.target.languages.selectedOptions)
                          .map(option => option.value);

    console.log("User Name:", userName);
    console.log("Age:", age);
    console.log("Gender:", gender);
    console.log("fileInput:", fileInput);
    console.log("Hobbies:", hobbies);
    console.log("Country:", country);
    console.log("Languages:", languages);

 
  }


  const formValues = {
    userName: '',
    age: '',
    gender: '',
    hobbies: [],
    country: '',
    languages: [],
    password:''
  };






  const onChangePassword =(event)=>{
    console.log(event.target.value);
    const password =event.target.value;
    formValues.password = password;
  }

//   // Function to handle input change
//   const handleInputChange = (event) => {
//     const { name, type, value, checked, options } = event.target;

//     if (type === 'checkbox') {
//       if (checked) {
//         formValues[name] = [...formValues[name], value];
//       } else {
//         formValues[name] = formValues[name].filter(hobby => hobby !== value);
//       }
//     } else if (type === 'radio') {
//       formValues[name] = value;
//     } else if (type === 'select-multiple') {
//       const selectedOptions = Array.from(options).filter(option => option.selected).map(option => option.value);
//       formValues[name] = selectedOptions;
//     } else {
//       formValues[name] = value;
//     }

//     console.log(formValues);
//   };


//   const formOnSubmit = (event) => {
//     event.preventDefault();

   
//     console.log("Final Form Values:", formValues);

   
//   };

//   document.getElementById('userForm').onsubmit = formOnSubmit;



// ternary Operator ///



// const age = numbers >18 ? "adult" : "child";


const arr =[1, 3, 5,]