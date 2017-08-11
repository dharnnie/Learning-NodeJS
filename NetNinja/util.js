var util = require('util');
var events = require('events');

var Person = function(name){
  this.name = name;
};

util.inherits(Person,events.EventEmitter);

var danny = new Person('Daniel');
var dm = new Person('Doug');
var pd = new Person('Diran');
var people = [danny,dm,pd];

people.forEach(function(person){
  person.on('speak', function(msg){
    console.log(`${person.name} just said ${msg}`);
  });
})

danny.emit('speak', "Mind your business!");
dm.emit('speak', 'Welldone!');
pd.emit('speak', 'RJSKDJEUSJP');
