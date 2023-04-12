const leoName = 'Leo Musvaire'
const leoNumber = '2'
const leoStreet = 'Church St.'
const leoPostal = '3105'
const leoBalance = '-10'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'
const sarahNumber = '13'
const sarahStreet = 'William Close'
const sarahPostal = '0310'

// Only change below this line     // added colons and commas

const leo = {
	name : leoName,          // removed the leoSurname was not needed since is not available up there
	balance : leoBalance,
	accessId: `47afb389-8014-4d0b-aff3-e40203d2107f`,        //Changed the `access id` property to `accessId` to match the naming convention used in Javascript
	age : 24,
	address : {
		number: leoNumber,
		street: leoStreet,
		postalCode: leoPostal,
	}
}

const sarah = {
	name : sarahName + sarahSurname,                             //corrected the casing of sarah
	age : 62,
	accessId: `6b279ae5-5657-4240-80e9-23f6b635f7a8`,             //Changed the `access id` property to `accessId` to match the naming convention used in Javascript
	age : 24,         
	balance: sarahBalance,
	address: {
		number: sarahNumber,
		street: sarahStreet,
		postalCode: sarahPostal,
	}
}
console.log(leo, leo.address.postalCode)                      // added the hyphens
console.log(sarah, sarah['address']['postalCode'])
 