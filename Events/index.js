const EventEmitter = require('events');

const event = new EventEmitter();
//Define Event
event.on('Say-My-Name', () => {
    console.log("Your Name is Vinay");
});

event.on('Say-My-Name', () => {
    console.log("Your Name is Pokra");
});

event.on('Say-My-Name', () => {
    console.log("Your Name is Vinay Pokra");
});

event.on('Checkpage', (sc,message) => {
    console.log( `Status Code is ${sc} and the page is ${message}`);
});
//Throw Event
// event.emit("Say-My-Name");
event.emit("Checkpage",200, 'ok');