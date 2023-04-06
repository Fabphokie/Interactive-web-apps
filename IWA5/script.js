const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'; // Add letter G on 'Warning'
const NONE_SELECTED = 0;   //   Removed quotes


let shipping = null;    // changed from cosntant to variable to allow reassignment
let currency = '$';    // added quotes
let location = 'NK';
let customers = 1;   // removed the quotes because it cant work when its a string




// added 'Const'

const shoes = 300 * 1;
const toys = 100 * 5;
const shirts = 150 * NONE_SELECTED;   // removed the quotes
const batteries = 35 * 2;                      // added '='
const pens = 5 * NONE_SELECTED;  // removed the quotes


// fixed the if statements and added missing brackets
if (location === 'RSA') { 
    shipping = 400;
    currency = 'R'; 
} 
else if (location === 'NAM') {
    shipping = 600;
} else {
    shipping = 800;

} 

// fixed the if statements and added missing brackets
if (shoes + batteries + pens + shirts > 1000) {
	if (location === 'NAM' && customers < 2) {
        shipping = 0 ;            

    } else if (location === 'RSA') {
		    shipping = 0 ;
	}
}


if ( shipping === 0 && customers !== 1) {       //removed extra brackets
    console.log(FREE_WARNING);    // Correct the varible from warning to free_warning
}


// corrected the if statement

if (location ==='NK') {
 console.log(BANNED_WARNING);
 } else {
    console.log('Price', currency, shoes + batteries + toys +pens + shirts + shipping);   // add toys to balance
 }



 