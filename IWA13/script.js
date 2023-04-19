let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below


const logCalc = () => {           //Added the = operator after logCalc 
    const isString = typeof calculated === 'string' && !isNaN(calculated);  //  added more == before the 'string'
    const calculatedAsNumber = isString ? parseInt(calculated) : calculated;
    calculated = calculatedAsNumber + 1     //Removed == before calculatedAnswer
}

const calcUser = () => {    //Removed = then added after calcUser
  logCalc();                     //added the brackets
  if (calculated > 2) user = 'John'
  if (calculated > 2) state = 'requesting'
  if (calculated > 3) state = 'idle'
}

const checkUser = () => {   //added = after checkUser
	if (user && state === 'requesting') {
		console.log(`User: ${user} (${calculated})`)
	}
}

// Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()