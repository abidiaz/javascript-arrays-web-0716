//accessElementInArray(array, index) - accesses the element in `array` at the given `index`
//removeElementFromBeginningOfArray(array) - removes the first element from the `array`
//removeElementFromEndOfArray(array) - removes the last element from the `array`
var chocolateBars = ["snickers", "hundred grand", "kitkat","skittles"];
function addElementToBeginningOfArray(array, element){
    return newArray = [element, ...array]
}
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}
function addElementToEndOfArray(array, element){
  return [...array, element];
}
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}
function accessElementInArray(array, index){
  return array[index]
}
function removeElementFromBeginningOfArray(array){
  array.shift()
  return array
}
function removeElementFromEndOfArray(array){
  array.pop()
  return array
}