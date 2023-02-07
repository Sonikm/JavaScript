
"use strict"

class RailwayForm {
    
    submit() {
        console.log(this.name + " : Your Form is submitted and your Id is : " + this.id)
    }
    cancel() {
        console.log(this.name + " : This Form is cancelled")
    }
    fill(name, id) {
       this.name = name
       this.id = id
    }
}

// Creating object to accesses the class data and members
let harryForm = new RailwayForm()
let rohanForm = new RailwayForm()

// First name will set
harryForm.fill("Harry", 26531)
harryForm.submit();
rohanForm.fill("Rohan", 2478322)
rohanForm.submit();

// Object type
console.log(typeof harryForm)
// Function type
console.log(typeof RailwayForm)
// will return function
console.log(typeof rohanForm.cancel)

// Rohan form is cancelled
rohanForm.cancel();

