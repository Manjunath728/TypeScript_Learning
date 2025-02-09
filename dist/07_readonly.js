"use strict";
console.log("07 READ ONLY");
const emp1 = {
    empId: 123,
    joiningDate: new Date(),
    name: "manjunath",
    age: 21
};
console.log(emp1);
emp1.age = 22;
console.log(emp1);
// not able to change empid
// emp1.empId=234
console.log(emp1);
