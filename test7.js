console.log("hello")

let a = document.getElementById('btn');
a.addEventListener('mouseover', func1);



function func1(e) {
    console.log("thanks for double clicking", e)
}