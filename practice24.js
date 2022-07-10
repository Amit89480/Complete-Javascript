console.log("This is Amit");

const proto = {
    slogan: function() {
        return `This company is the best`;
    },
    changeName: function(newName) {
        this.name = newName
    }
}

// This creates Amit object
let Amit = Object.create(proto);
Amit.name = "Amit";
Amit.role = "Programmer";
// Amit.changeName("Amit2")
// console.log(Amit)

// This also creates Amit object
const Amit1 = Object.create(proto, {
    name: { value: "Amit", writable: true },
    role: { value: "Programmer" },
});
Amit1.changeName("Amit2")
    // console.log(Amit1)


// Employee constructor
function Employee(name, salary, experience) {
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}

// Slogan
Employee.prototype.slogan = function() {
    return `This company is the best. Regards, ${this.name}`;
}

// Create an object from this constructor now
let AmitObj = new Employee("Amit", 345099, 87);
console.log(AmitObj.slogan())

// Programmer
function Programmer(name, salary, experience, language) {
    Employee.call(this, name, salary, experience);
    this.language = language;
}

// Inherit the prototype
Programmer.prototype = Object.create(Employee.prototype);

// Manually set the constructor
Programmer.prototype.constructor = Programmer;

let rohan = new Programmer("Rohan", 2, 0, "Javascript");
console.log(rohan);