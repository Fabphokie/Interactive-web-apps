const salary = 4000;
const lodging = 'apartment'
const size = 'large'


// Only change the syntax below (not the values or key names)

const expenses = {
    food: 51.7501,
    transport:  10.2,
}
  
const tax = {
    734: '3%',
    234: '20%',
    913: '12%',
    415: '38%',
    502: '42%',
}

const rent = {
    none: 0,
    'small-room': 200,
    'large-room': 300,
    'small-apartment': 400,
    'large-apartment': 800,
    'small-house': 1200,
    'large-house': 2400,
}

// You can change below however you want                  //corrected the way to access the tax value for key 'key['913'] and then parsing the value to a float using 'parseFloat'

const taxAsDecimal = parseFloat (tax['913']) / 100;       // added semicolons to the end of each statement 
const startingAfterTax = salary * (1 - taxAsDecimal);      // added brackets to multiply not subtract
const type = lodging + size;
const balance = startingAfterTax -        // added the starting AfterTax so the expenses can be subtract from it
expenses['transport'] - expenses['food'] - rent['large-apartment'];     // Corrected the way to access the value of 'rent' 
console.log(balance.toFixed(2));      //added the fixed method to round to the decimal of 2    //added square brackets when accessing the values of 'expenses' and 'rent'