class Student {
    constructor(name_student, age, phoneNo) {
        this.name_student = name_student;
        this.age = age;
        this.phoneNo = phoneNo;

    }

    static name = "Playwight2x";
    static mentor_name = "PrrammodDutta";

    static display() {
        console.log("Hi, I am common f(n)");
    }
}

const s1 = new Student("Yash", 32, "97654323456");
const s2 = new Student("Sharad", 30, "8234567876");


console.log(s1.name_student);
console.log(s2.name_student);

console.log(Student.name);
console.log(Student.mentor_name);