let a = /amit/g; //gloal serach
// a = /amit/i; ==>case insensitivity
let b = "This is the end of the era amit bhai.So amit bhai do something"

let result = a.exec(b);
console.log(result);
result = a.exec(b);
console.log(result);

let result2 = a.test(b); //this will print with either true or false
console.log(result2)

let result4 = b.match(a);
console.log(result4);

let result5 = b.search(a);
console.log(result5);
let result6 = b.replace(a, "Misti");
console.log(result6);