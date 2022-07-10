function getdata() {
    console.log("here we are starting the function")
    url = "amit.txt"
    fetch(url).then((response) => {
        return response.text();
        // in the above code can also use response.json to convert the json file into object
    }).then((data) => {
        console.log(data)
    })
}