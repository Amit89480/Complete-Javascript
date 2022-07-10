console.log("here we will be learning symbols");

const sym = Symbol('my name');
// if we will create another symbol there will be differnce in both of them
console.log('symbol is ', sym);
console.log(typeof sym)


const a = 'thisis'
const b = 'thisis'
console.log(a === b);

const k1 = Symbol();
const k2 = Symbol();
myobj = {

}
myobj[k1] = "amit"
myobj[k2] = "misti"
console.log(myobj);