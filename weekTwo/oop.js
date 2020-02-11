class Pet {
    constructor(name, type) {
        this.name = name;
        this.type = type;
        this.legs = 4;
    }
    speak() {
        if(this.type == "Cat") {
            console.log("meow")
        }
        else if (this.type == "Dog") {
            console.log("bark")
        } else {
            console.log("Hello")
        }
        return this
    }
}

var nameArray = ["Michael", "Cesar", "Jose", "Derek"]

nameArray.length

var leo = new Pet("Leo", "Cat");
var fido = new Pet("Fido", "Dog");

console.log(leo)

console.log(leo.name)
console.log(leo.legs)

console.log(fido.speak())

var x = 10;

