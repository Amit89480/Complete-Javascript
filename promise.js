// console.log("hello world")

function func1() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            const error = false;
            if (!error) {
                console.log("your promise has been resolved!");
                resolve();
            } else {
                console.log("sorry");
                reject("not fulfilled ");
            }
        });
    });
}

func1()
    .then(function() {
        console.log("thanks bro!");
    })
    .catch(function(error) {
        console.log("not acheived!");
    });