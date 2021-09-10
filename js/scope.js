// Global scope.
var globalName = "Joe";

function something() {
    globalName = "Piroska";
console.log(globalName);
}
something();

console.log(globalName);