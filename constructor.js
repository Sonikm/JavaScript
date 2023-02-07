class RailwayForm {
    // Constructor will called when object is created it will called automatically while object creation
    // class constructor will not object without new keyword
    // As well as We can set the value in properties
    constructor(name, trainNo){
        console.log("CONSTRUCTOR CALLED!")
        this.name = name
        this.trainNo = trainNo
    }
    submit() {
        console.log(this.name + " : Your form is submitted and your train number is : " + this.trainNo)
    }
    cancel() {
        console.log(this.name + " : Your form is cancelled and your train number was : " + this.trainNo)
    }
    // fill(name, trainNo){
    //     this.name = name
    //     this.trainNo = trainNo
    // }
}

// creating two object as a pasenger
let person1 = new RailwayForm("Rohan", 361431)
let person2 = new RailwayForm("Akshay", 13267)

// // Both filling their form
// person1.fill("Rohan", 361431)
// person2.fill("Akshay", 13267)

// Both has submitted their form
person1.submit();
person2.submit();

// person 2 form has cancelled
person2.cancel();
