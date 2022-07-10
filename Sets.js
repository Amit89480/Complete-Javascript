console.log("we are in!");
// set is a collection of well defined object
// initalize an empty set
const myset = new Set();

myset.add("this");
myset.add("I love coding!");
myset.add("this") /
    // here it will not take the above one as it will not accept the same object
    console.log(myset);
// /set can also be like this


let set = new Set([6, 8, "amit", "misti", { a: 0 }])
console.log(set)

console.log(set.size)
console.log(set.has(8));

console.log(set.delete(8))
console.log(set)


// iterating in a set

for (let items of set) {
    console.log('item is',
        items);
}

// /converting into array
let array = Array.from(set)
console.log(array)