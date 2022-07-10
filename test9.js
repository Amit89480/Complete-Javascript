// console.log("hello world")
// let obj = {
//     name: "amit",
//     features: function() {
//         console.log("Html");
//     }


// }
// console.log(obj)

function obj(name) {
    this.name = name

}
let obj1 = new obj("Amit")
console.log(obj1)
    // yaha pe hum prototype ke object ko edit karenge matlab ki yaha pe hum prototype ke ander apna prototype add kar sakrey hai

obj.prototype.getName = function() {
    return this.name;
}

// here we will start prototype inheritance


let proto = {
    name: function(name) {
        this.name = name;
    },
    role: function() {
        return `I am A programmer`
    }
}
const amit = Object.create(proto)
amit.name = "amit";
amit.role = "programmer";
console.log(amit)


let newobj = Object.create(proto, {
    name: { value: "amit2" },
    role: { value: "coder" }
});
console.log(newobj)