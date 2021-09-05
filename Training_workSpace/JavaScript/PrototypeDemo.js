//constructor function 
function Student(fn,ln,age){
    this.firstName = fn;
    this.lastName = ln;
    this.age =  age;
    
}

Student.prototype.getFullName =  function () {
    console.log(this.firstName + " " + this.lastName);
}



let student3 =new  Student("Aravind", "HB", 33)

let student4 =new Student("Aravindsss", "HB", 33)

let student5 =new Student("Aravinddddd", "HB", 33)

student3.getFullName();
student4.getFullName();
student5.getFullName();

console.log(Student.prototype);

