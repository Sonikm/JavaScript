
// let a = {
//     name: "Soni",
//     age : 20,
//     city: "Delhi",
//     run: () => {
//         console.log("A is running")
//     }
// }

// console.log(a)

// let p = {
//     run: () => {
//         console.log("Running")
//     }
// }

// console.log(p.run())

// // Using proto type a can inherit p
// a.__proto__ = p;
// a.run()

// p.__proto__ = {
//     color : "Pink"
// }

// console.log(a.color);

let a = {
    name: "Harry",
    language: "JavaScript",
    run : () => {
        console.log("Self running")
    }
}

console.log(a)

let p = {
    run : () =>{
        console.log("Running")
    }
}

a.__proto__ = p;
a.run()

p.__proto__ = {
    name: "Jacky"
}

console.log(a.name)

let parentInfo = {
    fname: "Dinesh Prasad",
    city: "Delhi",
    age: "40"
}

let student = {
    name: "Soni",
    course: "BCA",
    age: 20,
}

p.__proto__ = parentInfo;
console.log(p.city, p.fname);

