class MyListNode<T> {
    next?: MyListNode<T>

    constructor(public value: T) {}
}

class MyLinkedList<T> {
    private root?: MyListNode<T>;
    private tail?: MyListNode<T>;
    private length: number = 0;

    append(value: T) {
        const newNode = new MyListNode(value);
        if (!this.root || !this.tail) {
            this.root = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode; 
        }
        this.length++;
    }

    getNumberOfElements() {
        return this.length;
    }

    print() {
        let current = this.root;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

const myNumberList = new MyLinkedList<number>();

myNumberList.append(10);
myNumberList.append(30);
myNumberList.append(20);

console.log("Number of elements:", myNumberList.getNumberOfElements());
myNumberList.print();

const myNameList = new MyLinkedList<string>();