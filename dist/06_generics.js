"use strict";
console.log("06 GENERICS");
class storageArray {
    constructor() {
        this.contents = [];
    }
    printArray() {
        console.log(this.contents);
    }
    addItem(item) {
        this.contents.push(item);
    }
    getItem(index) {
        return this.contents[index];
    }
}
const stringStorage = new storageArray();
stringStorage.addItem("hello");
stringStorage.addItem("world");
console.log("index ", 1, " is : ", stringStorage.getItem(1));
stringStorage.printArray();
const numberStorage = new storageArray();
numberStorage.addItem(100);
numberStorage.addItem(200);
console.log("index ", 1, " is : ", numberStorage.getItem(1));
numberStorage.printArray();
