let s = document.querySelector(".container ")
s.style.color = 'green'
console.log(s)


let ele = document.getElementsByClassName("container")
let tag = document.getElementsByTagName('div')
console.log(ele)




let design = document.getElementsByClassName('container');
Array.from(design).forEach(function(ele) {
    console.log(ele)
    ele.style.color = 'red'

})


let a = document.getElementById('container')
a.style.color = 'red'
console.log(a);


let v = document.querySelector('.container');
v.style.color = 'green';
console.log(v);