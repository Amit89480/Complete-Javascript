console.log("this is practice 8")
localStorage.setItem('name', 'amit')
localStorage.getItem('name');
let arr = ['name', 'add', 'pin']
let g = localStorage.setItem('array', JSON.stringify(arr))
let G = JSON.parse(localStorage.getItem(arr))
console.log()