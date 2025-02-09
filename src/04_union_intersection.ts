console.log("04 UNION and Intersection ");


//union
function printId(id:string| number | boolean ){
    console.log("ID : ",id);
}


printId(123)
printId("qa-123-a-123")
printId(true)

type IDfiledType= string | number | boolean

function printIdField(id:IDfiledType) {
    console.log("ID : ", id);
}
printIdField(123)
printIdField("qa-123-a-123")
printIdField(true)


//intersection

interface person {
    name:string,
    age:number | string
}

interface marks {
    sub1: number,
    sub2: number
}

type StudentType = person & marks

function printStudentInfo(student: StudentType){
    console.log("Student Details");
    console.log("---------------")
    console.log("name : ",student.age);
    console.log("age: ",student.age);
    console.log("total marks:",student.sub1+student.sub2,"/ 200");
}

const student:StudentType ={
    name:"manjunath",
    age:11,
    sub1:90,
    sub2:80
}

printStudentInfo(student)
