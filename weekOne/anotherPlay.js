console.log("You are runnning anotherPlay");

var name = "Tim";

// console.log(name);
var score = 10;
var result = false;

var names = ["Tim", "Cesar", "Jose"];


name = names[1];

// console.log(name);

var car = {
    make: "subaru",
    'model': "impreza",
    "year": 2000
};

// console.log(car);
name = 10;

// if(name == "Tim") {
//     console.log(`Ohp, it is ${name}`);
// }
// else if (name == "Cesar") {
//     console.log("Hello " + name);
// }
// else {
//     console.log(`Hello ${name} I wasn't expecting you`);
// }

for(let key in car) {
    console.log(`here is my key: ${key}, here is my value: ${car[key]}`);
};

// for(let value of car) {
//     console.log(value);
// }

// for(let i = 1; i<101; i+=2) {
//     console.log(i)
// }


var h = " "
while(h !== "hhhh"){
    console.log(h);
    h += 'h';
}




