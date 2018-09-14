// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function appendKitten(name) {
  var newLitter = Array.from(kittens);
  newLitter.push(name);
  return newLitter;
}

function prependKitten(name) {
  
}

function removeLastKitten(){
  
}

function removeFirstKitten() {
  
}

