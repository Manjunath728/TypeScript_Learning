console.log("03 INTERFACE");


interface UserInterface {
    id: number,
    name: string,
    age?: number
    greet(message:string):void;
}

const user: UserInterface ={
    id: 1,
    name: " manjunath",
    age:10,
    greet(message){
        console.log("Hi",this.name, message);
    }
}

if(!user.age){
    console.log("user dont have age");
 } else {
    console.log(user);
 }

 user.greet("good morning")

