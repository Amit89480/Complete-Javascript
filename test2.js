console.log("we are in test2.js")

a = document;
a = document.all;
a = document.scripts
Array.from(a).forEach(function(element) {
    console.log(element)
})

// here we did thedom manipulation and website layout