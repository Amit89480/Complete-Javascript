console.log("this is working")


const students = [
    { name: "amit", subject: "python" },
    { name: "misti", subject: "python" }
]

function enrollstudent(student, callback) {
    setTimeout(function() {
        students.push(student);
        console.log("student has been enrolled")
        callback();

    }, 3000);
}

function getstudent() {
    setTimeout(function() {

        let str = ""
        students.forEach(function(student) {
            str += `<li>${student.name}</li>`
        });
        document.getElementById('students').innerHTML = str

    }, 1000);
}
let newstudent = { name: "xyz", subject: "science" }
enrollstudent(newstudent, getstudent)
getstudent()