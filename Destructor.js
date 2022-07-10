console.log("Lets Destruct!");
let a, b;
[a, b] = [34, 67];
console.log(a, b);

// in below code the rest of the value will go in d as an object

// array destructoring

[a, b, c, ...d] = [1, 2, 4, 6, 3, 6, 8, 4, 2, 6, 8, 9, 0];
console.log(a, b, c, d);
const fruits = ["apple", "banana", "mangoes"];
[a, b, c] = fruits;
console.log(fruits);

// /below will be object destructoring

laptop = {
    model: "HP",
    amount: 8999,
    company: "GR0011AU",
    start: function() {
        console.log("started");
    }
};
const { model, amount, company } = laptop;
console.log(model, amount, company);
laptop.start();