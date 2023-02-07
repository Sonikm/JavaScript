// BASE OR PARENT CLASS
class Animal {
    constructor(name, color){
      this.name = name
      this.color = color
    }
    run(){
        console.log(this.name + " is running")
    }
    shout(){
        console.log(this.name + " is shouting")
    }
}

// extends keyword is used to inheritance to another class or to take all functionalities to another class
// DERIVE OR CHILD CLASS
class Monkey extends Animal {
    eat() {
        console.log(`${this.name} is eating banana`)
    }
    hide() {
        console.log(`${this.name} is hiding`)
    }
}

// || MULTIPLE INHERITANCE 
class Dog extends Monkey{
    bark(){
        console.log(this.name + " is barking")
    }
}

let anim = new Animal("Bruno", "white")
let m = new Monkey("Chimpu", "orange");
let d = new Dog("Puppy", "brown")

anim.shout()
m.eat();
m.run()
// (dog is inheriting Animal and Monkey both)
d.run()
d.hide()


// will not run and throw error becouse Anim is not inheriting monkey class
// anim.hide();