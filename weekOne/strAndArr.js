let names = ["John", "Derek", "Tim", "Jose", "Michael"];

// names = {
//     1: "Derek",
//     2: "Tim",
//     3: "Jose",
//     4: "Michael"
// }

// console.log(names, "This is names on line 10")

// for(let i=0; i < names.length; i++) {
//     console.log(names[i])
//     for(let j=0; j < names[i].length; j++) {
//         console.log(names[i][j])
//     }
// }

// names.push("Katrina")

// console.log(names, "This is names after pushing Katrina")

// names.pop()

// console.log(names, "This is names after popping")

// names.shift()

// console.log(names)



let str = "Hello World This Is Demonstrating Some String Stuff"

console.log(str.length)

let switchStr = str.split(' ')

console.log(str)

console.log(switchStr)

let temp = switchStr[0];
switchStr[0] = switchStr[1];
switchStr[1] = temp;

console.log(switchStr)

console.log(switchStr.join(' '))