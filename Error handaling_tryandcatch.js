let a = "Amit";
if (a == undefined) {
    throw new Error("This is not undefindes");
} else {
    console.log("everything is ok")
}




try {
    funcamit();

} catch (error) {
    console.log("Check your program")
    console.log(error.message)

}