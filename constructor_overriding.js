
class Employee {
    constructor(name) {
        this.name = name
        console.log(`${this.name} - Employee's constructor is here`)
    }
    login(){
        console.log(`Employee has logged in`)
    }
    logout(){
        console.log(`Employee has logged out`)
    }
    requestLeaves(leaves){
        console.log(`Employee has requested for ${leaves} leaves - Auto approved`)
    }
}

class Programmer extends Employee{
    // If there is no constructor in child class, this is created automatically 
    constructor(name){
        // If we not use super constructor then this will throw error
        super(name);
        console.log("This is a newly written constructor")
    }
    requestCoffee(x){
        console.log(`Employee has requested ${x} coffees`)
    }
    // || METHOD OVERRIDING
    requestLeaves(leaves){
        console.log(`Employee has requested for ${leaves + 2} leaves (two extra leaves)`)
    }
}

// let e = new Employee();
let p = new Programmer("Harry")
p.login()
p.requestLeaves(3);