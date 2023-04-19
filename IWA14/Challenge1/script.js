firstName = 'John';
age = 35;
hobby = 'Coding';

const logTwice = (parameter) => {    //added Parameter inside the brackets
  console.log(parameter)                //Added console.log
  console.log(parameter) 
}

function sayHobby  () {      //added say
  logTwice(`Hello, ${name} (${age}). I love ${hobby}!`)
}

sayHobby();   // added say