let div = document.querySelector('div');
console.log(div);
let elem3 = document.createElement('a');
elem3.setAttribute('href', 'https://www.codewithharry.com');

let elem4 = document.createElement('h2');

let elem5 = document.createElement('I');
elem4.appendChild(elem5);

console.log(elem4);
elem3.appendChild(elem4);
console.log(elem3);

let text1 = document.createTextNode('Go to CodeWithHarry');
elem5.appendChild(text1)
console.log(elem5);

div.appendChild(elem3);