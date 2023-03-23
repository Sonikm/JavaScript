
class Employee {
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
    requestCoffee(x){
        console.log(`Employee has requested ${x} coffees`)
    }
    // || METHOD OVERRIDING
    requestLeaves(leaves){
        // Super keyword to get parent function
        super.requestLeaves(4)
        // console.log(`Employee has requested for ${leaves + 2} leaves (two extra leaves)`)
    }
}

let e = new Employee();
let p = new Programmer()
p.login()
p.requestLeaves(3);