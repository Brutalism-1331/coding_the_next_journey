// This code should ask for name input and print Hello + input below top headding of page

var person = prompt ("What is your name?");  
var greeting;

if (person) { greeting = 'Hello ' + person + '!' ; }
else {greeting = "Hello " + "Human" + "!"; }
document.write ('<h3>' + greeting + '</h3>');




