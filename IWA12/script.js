// scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

const book1 = {                                               // added const on variables 
    status: document.querySelector('#book1 .status'),        // added the 'document.querySelector
    reserve: document.querySelector('#book1 .reserve'),     //'status' is a reference to the HTML element with a class of status within the element with ID of book1/2/3
    checkout: document.querySelector('#book1 .checkout'),
    checkin: document.querySelector('#book1 .checkin')
}
const book2 = {
    status: document.querySelector('#book2 .status'),
    reserve: document.querySelector('#book2 .reserve'),
    checkout: document.querySelector('#book2 .checkout'),
    checkin: document.querySelector('#book2 .checkin')
}
const book3 = {
    status: document.querySelector('#book3 .status'),
    reserve: document.querySelector('#book3 .reserve'),
    checkout: document.querySelector('#book3 .checkout'),
    checkin: document.querySelector('#book3 .checkin')
}  
// added the function of 'updateBookStatus'
// the function takes a book object as an argument  and uses the STATUS_Map object to update the attributes of the book elements
function updateBookStatus(book) {         
    const status = book.status.textContent.trim()
    const statusInfo = STATUS_MAP[status]
    book.status.style.color = statusInfo.color
    book.reserve.disabled = !statusInfo.canReserve
    book.checkout.disabled = !statusInfo.canCheckout
    book.checkin.disabled = !statusInfo.canCheckIn
}


updateBookStatus(book1)
updateBookStatus(book2)
updateBookStatus(book3)

const overdue = book1.checkin                     //declared the 'overdue' constant
const checkIn = overdue.style.color = ''           //sets the style color to an empty string,effectively resetting the color to the default

const reserved = book2.checkin                      //declared the 'reserved' constant 
const checkOut = reserved.style.color = ''           //sets the style color to an empty string,effectively resetting the color to the default

const shelf = book3.checkin                         //declared the 'shelf' constant
const CheckIn = shelf.style.color = ''               //sets the style color to an empty string,effectively resetting the color to the default












