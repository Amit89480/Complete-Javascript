async function amit() {
    console.log("Welcome Amit")
    const response = await fetch('https://api.github.com/users')
    console.log("before response")
    const users = await response.json();
    console.log("user resolved")
    return users;
}
let a = amit();
a.then(data => console.log(data))

amit();