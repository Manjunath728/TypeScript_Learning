console.log("07 READ ONLY");

interface Employee {
    readonly empId: number
    readonly joiningDate: Date
    name: string
    age : number
}


const emp1:Employee = {
    empId: 123,
    joiningDate : new Date(),
    name : "manjunath",
    age: 21
}


console.log(emp1);

emp1.age=22
console.log(emp1);

// not able to change empid
// emp1.empId=234
console.log(emp1);