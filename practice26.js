console.log("synchronous and asynchronous")



// synchorous or blocking code means done printing will be printed at last
for (index = 0; index < 45; index++) {
    const ans = index;
    console.log("index is " + index)
}

console.log("done printing")

// asynchrous or non blocking code meansdone printing will be printed first and rest of task will go side by side



setTimeout(() => {
    for (index = 0; index < 45; index++) {
        const ans = index;
        console.log("index is " + index)
    }

}, 100);
console.log("done printing")