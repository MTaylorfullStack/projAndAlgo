class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

firstNode = new Node(5);
// console.log(firstNode.next);
// firstNode.next = secondNode;
// thirdNode = new Node(9);
// fourthNode = new Node(15);
// secondNode.next = thirdNode;
// thirdNode.next = fourthNode;
// console.log(firstNode.next);
// console.log(firstNode)

class SLL {
    constructor(node) {
        this.head = node;
    }
    view() {
        var runner = this.head;
        var count = 1;
        while(runner) {
            console.log(`You are on Node: ${count}, it's value is: ${runner.value}`)
            runner = runner.next;
            count += 1;
        }
        return this
    }
    addFront(value) {
        var temp = this.head;
        this.head = new Node(value);
        this.head.next = temp;
        console.log("A new Node has been added to the front of the list");
        return this
    }
    addBack(value) {
        //find the end of list
        //add node
        var runner = this.head;
        while(runner.next) {
            console.log(`This is the current value: ${runner.value}, This is the next node: ${runner.next}`)
            runner = runner.next;
        }
        runner.next = new Node(value);
        return this
    }
}

firstSll = new SLL(firstNode);

firstSll.view().addFront(10).addFront(9).addFront('abc').addFront(55).addBack('Hello World').addFront("World Hello").view();

