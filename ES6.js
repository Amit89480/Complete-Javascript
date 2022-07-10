console.log("hello! ES6");
class developer {
    constructor(giverName, givenSalary, givenLanguage) {
        this.name = giverName;
        this.salary = givenSalary;
        this.language = givenLanguage;
    }
    slogan() {
            return `I am ${this.name} and this is the best job i have!`;
        }
        // aise hi use karna hai bina class banaye
    static add(a, b) {
        return a + b;
    }
    joiningyear() {
        return 89 + this.salary;
    }
}
class programmer extends developer {
    constructor(giverName, givenSalary, givenLanguage, exp) {
        super(giverName, givenSalary, givenLanguage);
        this.exp = exp;
    }
}
Amit = new developer("Amit", 165000, "HTML,C++,JAVA");
Amit = new programmer("Amit", 165000, "HTML,C++,JAVA", 5)
    // console.log(Amit);
    // console.log(developer.add(8, 5));
    // console.log(Amit.joiningyear());
console.log(Amit);

class worker {
    constructor(salary, time, amount) {
        this.salary = salary;
        this.time = time;
        this.amount = amount;
    }
    slogan() {
        return 'I am really a great developer'
    }
}

let amit = new worker(8999999, 7, 899)
console.log(amit);