console.log("this is new practice about es6")



class developer {

    constructor(Name, exp, domain) {
        this.name = Name;
        this.exp = exp;
        this.domain = domain;
    }
    slogan() {
        return `i am ${this.Name}`
    }
    static add(a, b) {
        return a + b
    }
}


// understanding the inheritance
class remote extends developer {

    constructor(Name, exp, domain, field) {
        super(Name, exp, domain)
        this.field = field;
    }
    slogan() {
        return `i am ${this.Name}`
    }
    static add(a, b) {
        return a + b
    }
}


Amit = new remote("Ap", 5, "nodsjs,javascript", "web developer")
console.log(Amit)
console.log(remote.add(34, 8))