let element = document.createElement('li')

element.className = 'student'
element.setAttribute('title', "my title")
let ul = document.querySelector('ul.this')
ul.appendChild('element')
console.log(ul)
console.log(element)