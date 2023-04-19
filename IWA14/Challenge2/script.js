// script.js
function add(a, b) {     //added the brackets because the function declarations for add and multiply were using arrow function syntax incorrectly.
    return a + b;
}
  
function multiply(a, b) {     //added the brackets and removed the arrow function
    return a * b;
}
  
function internal() {                    // removed the const  function and this object.
     add = this.add(this.internal.a, this.internal.b);        //added an add and multiply variable
     multiply = this.multiply(add, this.internal.c);        //added an object property of internal on this object
    console.log(multiply);              //added console.log statements
    
}


// Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
}

example1.calculate()
example2.calculate()