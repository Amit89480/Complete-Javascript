console.log("we are in!")

people = ["amit", "misti", "ashis"]
    // traditional method
for (let index = 0; index < people.length; index++) {
    const element = people[index];
    console.log(element)
}

obj = {
    name: "amit",
    language: "javascript",
    hobbies: "android dev"
}
console.log(obj);

// iterating an object
for (let index = 0; index < Object.keys(obj).length; index++) {
    const element = obj[Object.keys(obj)[index]];
    console.log(element)
}
// here we are using here for in here we are using this for iterating over objects using keys
for (let keys in obj) {
    console.log(obj[keys])
        // }ezample


}
let nam = "amit is a very good boys"

for (let keys in nam) {
    console.log(nam[keys])
}
// here we will discuss about for of loop
// /for of starts here 

let lists = ["amit", "ashis", "misit"]
for (let name of lists) {
    console.log(name)
}