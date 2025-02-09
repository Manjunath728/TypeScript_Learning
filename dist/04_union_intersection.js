"use strict";
console.log("04 UNION and Intersection ");
//union
function printId(id) {
    console.log("ID : ", id);
}
printId(123);
printId("qa-123-a-123");
printId(true);
function printIdField(id) {
    console.log("ID : ", id);
}
printIdField(123);
printIdField("qa-123-a-123");
printIdField(true);
function printStudentInfo(student) {
    console.log("Student Details");
    console.log("---------------");
    console.log("name : ", student.age);
    console.log("age: ", student.age);
    console.log("total marks:", student.sub1 + student.sub2, "/ 200");
}
const student = {
    name: "manjunath",
    age: 11,
    sub1: 90,
    sub2: 80
};
printStudentInfo(student);
