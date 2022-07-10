class employee {
    constructor(givenName, givenSalary, givenexp) {
        this.name = givenName;
        this.salary = givenSalary;
        this.exp = givenexp;
    }
}
class capegemini extends employee {
    constructor(givenName, givenSalary, givenexp, language) {
        super(givenName, givenSalary, givenexp)
        this.language = language;
    }
}
Amit = new employee("Amit", 15000, 3)
console.log(Amit);
Shubham = new capegemini("Shubham", 150000, 3, "Go")
console.log(Shubham);