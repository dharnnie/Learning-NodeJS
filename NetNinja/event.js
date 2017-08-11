var events = require('events');

var myEmitter = new events.EventEmitter();

myEmitter.on("slap", function(name){
  console.log( "I just slapped " + name);
}).emit("slap","Daniel");
