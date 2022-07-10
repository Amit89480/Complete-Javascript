console.log('This is tut 20');
let impArray = ['adrak', 'pyaz', 'bhindi'];

// Add a key-value pair inside local StoragelocalStorage.setItem('Name', 'Amit');
localStorage.setItem('Name2', 'Rohan');
localStorage.setItem('Sabzi', JSON.stringify(impArray));

// Clears the entire local storage
localStorage.clear();

// Clear a particular key - value pair
// localStorage.removeItem('Name2');

// Retrieve an item from the local Storage
let Name = localStorage.getItem('Name');
Name = JSON.parse(localStorage.getItem('Sabzi'));
console.log(Name)

sessionStorage.setItem('sessionName', 'sHarry');
sessionStorage.setItem('sessionName2', 'sRohan');
sessionStorage.setItem('sessionSabzi', JSON.stringify(impArray));