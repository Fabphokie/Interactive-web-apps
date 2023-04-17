firstName = 'John';
age = 35;
hobby = 'Coding';

const logTwice = (parameter) => {
  console.log(parameter)
  console.log(parameter)
}

function sayHobby  () {
  logTwice(`Hello, ${name} (${age}). I love ${hobby}!`)
}

sayHobby();