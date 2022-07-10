console.log("Hello AYSNC AND SYNC");





// for sync
let i = 0
for (i = 0; i < 100; i++) {
    console.log('This numbers are: ' + i)
}
console.log("Done printing");

// now async

setTimeout(() => {
    for (i = 0; i < 100; i++) {
        console.log('This numbers are: ' + i)
    }
}, 4000);
console.log("done printing");