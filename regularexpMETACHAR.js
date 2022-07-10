let reg = /^a*m?it/i;
let str = "Amit is a very good programmer and he knows many languages"



let result = reg.exec(str);

if (result) {
    console.log("the match of the Meta charcaters is found");
}