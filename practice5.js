var myString = 'JavaScript!!!';
console.log(myString.charAt(7));
//output: i
var str1 = "JavaScript"
var str2 = str1.concat(" is", "awesome")
console.log(str2);
//Output: JavaScript is awesome
//indexOf(char/substring)
var str1 = "Hi, my name is Sam!";
var str2 = str1.indexOf("locate");
//Output: -1
var myString = 'javascript Node.js';
console.log(myString.lastIndexOf('N'));
//output: 11
var text = "programming"
var mystr = text.slice(0, 4)
console.log(mystr)
    //Output:- "prog"
var txt = "a,b,c,d,e"; // String
txt.split(","); // Split on commas
txt.split(" "); // Split on spaces
//substring(from, [to])
var myString = 'javascript Programming';
myString = myString.substring(0, 10);
console.log(myString)
    //output: javascript
    //toLowerCase()
var myString = 'JAVASCRIPT';
myString = myString.toLowerCase();
console.log(myString)
    //output: javascript
    //toUpperCase()
var myString = 'javascript';
myString = myString.toUpperCase();
console.log(myString)
    //output: JAVASCRIPT
var str = "Welcome to programming World!!";
var pos = str.search("programming");
var str = "Apple, Banana, Kiwi";
var res = str.substr(7, 6);
// Output: Banana
let simple = `This is an example of
                     Template literal`;
let firstName = 'Code With',
    lastName = 'Harry';
let greeting = `Welcome to ${firstName} ${lastName}`;
console.log(greeting);
//Welcome to Code With Harry