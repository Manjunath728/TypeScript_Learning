console.log("01_basicssss my bad ");


// variables
let string_var: String = "hello"
console.log("string_var : ", string_var);

let number_var: number = 20
console.log("number_var : ", number_var);

let array_1: number[] = [1, 2, 3, 4, 5]
console.log("number array ", array_1)


interface contact_info {
    email: String,
    phone_no: number
}
interface person_1 {
    name: String,
    age: number,
    contact: contact_info
}
let student_1: person_1 = { name: "manjunath", age: 18, contact: { email: "a@b.com", phone_no: 9876543210 } }
console.log(student_1);
let student_2: person_1 = { name: "abc", age: 21, contact: { email: "c@d.com", phone_no: 1234567890 } }
console.log(student_1);
let students: person_1[];
students = [student_1, student_2]
console.log(students);


let temp1: any;

temp1 = "String"
console.log("temp1", temp1);
temp1 = 10
console.log("temp1", temp1);
temp1 = [1, 2, 3, 4, 5]
console.log("temp1", temp1)

let temp2: any[] = ["string", 10, array_1, student_1, students, temp1]

console.log("temp2 is array of type any[] ", temp2);


