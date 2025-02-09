console.log("06 GENERICS");


class storageArray<T> {
    private contents: T[];
    constructor (){
        this.contents=[]
    }
    printArray(){
        console.log(this.contents);
    }
    addItem(item:T){
        this.contents.push(item)
    }
    getItem(index: number):T | undefined {
        return this.contents[index]
    }
}


const stringStorage = new storageArray<string>();
stringStorage.addItem("hello")
stringStorage.addItem("world")
console.log("index ",1," is : ", stringStorage.getItem(1));
stringStorage.printArray()



const numberStorage = new storageArray<number>();
numberStorage.addItem(100)
numberStorage.addItem(200)
console.log("index ", 1, " is : ", numberStorage.getItem(1));
numberStorage.printArray()
