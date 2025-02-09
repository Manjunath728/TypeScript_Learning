"use strict";
console.log("03 INTERFACE");
const user = {
    id: 1,
    name: " manjunath",
    age: 10,
    greet(message) {
        console.log("Hi", this.name, message);
    }
};
if (!user.age) {
    console.log("user dont have age");
}
else {
    console.log(user);
}
user.greet("good morning");
