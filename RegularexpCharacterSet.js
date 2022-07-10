console.log("welcome")

let regex = /A[^it]it/
let str = "Amit is a good programmer"
let result = regex.exec(str)
console.log(result);
if (regex.test(str)) {
    console.log("The character found!")
} else {
    console.log("Didnt matched!")
}

let q = /Am{2}t/
str = "Amt is a a great javascript developer" //here it will be nulll as it inly has one m
let r = q.exec(str)
console.log(r)


let grouping = /(ami){2}t/
let s = "amiamit is a very great person and nobody can beat him certified by alien too"
let res = grouping.exec(s);
console.log(res);