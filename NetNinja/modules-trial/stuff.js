var counter = function(arr){
  return `There are ${arr.length} elements in this array`;
};

var adder = function(a,b){
  return `Sum of the two numbers is ${a+b}`;
}

var pi = 3.146;

module.exports = {
  counter: counter,
  adder: adder,
  pi:pi,
};
