const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '------------------------------------'

// Only change below this line

const owed = (parseFloat(Math.abs(leoBalance).toFixed(2)) + parseFloat(Math.abs(sarahBalance).toFixed(2)))    //Removed unnecessary spaces in LeoSurname and sarahName
const leo = `${leoName} ${leoSurname} (Owed R${Math.abs(leoBalance).toFixed(2)})`;
const sarah = `${sarahName} ${sarahSurname} (Owed R${Math.abs(leoBalance).toFixed(2)})`;                    //Changed leoBalance and sarahBalance to numbers instead strings
const total = `Total amount owed: R ${owed} `;
const result = `\n${leo} \n${sarah } \n${divider}  \n${total} \n${divider}`;                               //Changed owed to add the the numbers leoBalance and sarahBalance instead concatenating strings
console.log(result)                                                                                         //Changed leo and sarah to  use template literals instead of string concatenation
                                                                                                            //added math.abs to sarahBalance and leoBalance to ensure positive number displayed when outputting the balance owed



