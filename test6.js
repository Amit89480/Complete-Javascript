console.log("hello")
document.getElementById('student').addEventListener('click', function(e) {
    console.log("you clicked this");

    console.log(e)

    let variable;
    variable = e.target.classlist
    console.log(e)
    variable = e.offsetX
    console.log(variable)


})