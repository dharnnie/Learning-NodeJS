var events = require('events');

var eventEmmiter = new events.EventEmitter();

var connectHandler = function connected() {
    console.log('connection succesful');

    eventEmmiter.emit('data_recieved');
}

eventEmmiter.on('connection', connectHandler)

eventEmmiter.on('data_recieved', function() {
    console.log('data received sucesfully');
});

eventEmmiter.emit('connection');

console.log('end of program');