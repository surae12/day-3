//json for loop
var numbers = [10, 20, 30, 40, 50]
for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}

//for in loop

var person = {
    fname: "Nick",
    lname: "Jonas",
    age: 26
};
for (let x in person) {
    console.log(x + ": " + person[x])
}

//for each loop 

var names = ["jerry", "tom", "pluto", "micky", "mini"];
names.forEach(function1);
function function1(currentValue, index) {
    console.log("Index in array is: " + index + " ::  Value is: " + currentValue);
}

//