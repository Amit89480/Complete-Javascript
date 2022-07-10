console.log("wecome buddy!")

function nameIteraot(values) {
    let nextIndex = 0;
    return {
        next: function() {
            if (nextIndex < values.length) {
                return {
                    value: values[nextIndex++],
                    done: false
                }

            } else {

                return {
                    done: true
                }
            }
        }
    }
}
let arr = ["amit", "ashis", "misti", "rohan "]
console.log(Array);
const ite = nameIteraot(arr)
console.log(ite.next())
console.log(ite.next())
console.log(ite.next())
console.log(ite.next())