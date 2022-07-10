console.log("amit is learning maps");
const mymap = new Map();
console.log(mymap);

const key1 = "mystr",
    key2 = {},
    key3 = function() {};
mymap.set(key1, "this is a string");
mymap.set(key2, "this is a empty function");
mymap.set(key3, "this is a empty function");
console.log(mymap);

// getting a values from a map
let value1 = mymap.get(key1);
console.log(value1);
let value2 = mymap.get(key2);
console.log(value2);

// get the size of the map

console.log(mymap.size);
// can be printed by using for loop or so on

for (let [key, value] of mymap) {
    console.log(key, value);
}

// get only keys
for (let key of mymap.keys()) {
    console.log(key);
}
// get only values


for (let value of mymap.values()) {
    console.log(value)
}



// by using foreach

mymap.forEach((value, key) => {
    console.log('key is ', key);
    console.log('value is', value)
});

// convetig map into array

let myarray = Array.from(mymap);
console.log(myarray);