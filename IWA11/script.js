const order1 = document.querySelector('[data-key="order1"]');  // removed the numbers on varibles because the variables names cant start with numbers
const  biscuits1 = order1.querySelector('.biscuits .count');     // the 'document()' function does not exist, so I removed it
const  donuts1 = order1.querySelector('.donuts .count');       //used the 'textContent' property to set the values of the 'count' and 'status' elements
const  pancakes1 = order1.querySelector('.pancakes .count');    //added 'querySelector' method to select the elements by their data-key attributes and classes
const  status1 = order1.querySelector('.status dd');            // used the 'dataset' property to access the data attributes

const order2 = document.querySelector('[data-key="order2"]');   // removed the numbers on varibles because the variables names cant start with numbers
const biscuits2 = order2.querySelector('.biscuits .count');       // the 'document()' function does not exist, so I removed it
const donuts2 = order2.querySelector('.donuts .count');           //used the 'textContent' property to set the values of the 'count' and 'status' elements
const pancakes2 = order2.querySelector('.pancakes .count');       //added 'querySelector' method to select the elements by their data-key attributes and classes
const status2 = order2.querySelector('.status dd');

const order3 = document.querySelector('[data-key="order3"]');   // removed the numbers on varibles because the variables names cant start with numbers
const biscuits3 = order3.querySelector('.biscuits .count');    // the 'document()' function does not exist, so I removed it
const donuts3  = order3.querySelector('.donuts .count');        //used the'textContent' property to set the values of the 'count' and 'status' elements
const pancakes3 = order3.querySelector('.pancakes .count');       //added 'querySelector' method to select the elements by their data-key attributes and classes
const status3 = order3.querySelector('.status dd');

biscuits1.textContent = order1.dataset.biscuits;
donuts1.textContent = order1.dataset.donuts;
pancakes1.textContent = order1.dataset.pancakes;
status1.textContent = order1.dataset.delivered  === "true" ? "Delivered" : "Pending";     //I used a ternary operator to set the value of the 'status' element based  on the value of the 'delivered' attribute

biscuits2.textContent = order2.dataset.biscuits;
donuts2.textContent = order2.dataset.donuts;
pancakes2.textContent = order2.dataset.pancakes;
status2.textContent = order2.dataset.delivered  === "true" ? "Delivered" : "Pending";      //I used a ternary operator to set the value of the 'status' element based  on the value of the 'delivered' attribute

biscuits3.textContent = order3.dataset.biscuits;
donuts3.textContent = order3.dataset.donuts;
pancakes3.textContent = order3.dataset.pancakes;
status3.textContent = order3.dataset.delivered === "true" ? "Delivered" : "Pending";       //I used a ternary operator to set the value of the 'status' element based  on the value of the 'delivered' attribute