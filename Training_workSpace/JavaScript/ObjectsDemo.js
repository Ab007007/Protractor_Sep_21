let student1 = {
    firstName : 'Harry',
    lastName : 'KL',
    age: 21,
    address : {
        doornum : 222,
        city : 'Bangalore',
        country : "India"
    },
    getFullName: function () {
        console.log(this.firstName + " " + this.lastName);
    }
  
};
let student2 = {
    firstName : 'Giri',
    lastName : 'KL',
    age: 21,
    getFullName: function () {
        console.log(this.firstName + " " + this.lastName);
    }
  
  
};


function createStudent(fn,ln,age) {
    let student = {
        firstName : fn,
        lastName : ln,
        age: age,
        getFullName: function () {
            console.log(this.firstName + " " + this.lastName);
        }    
    }
    return student;
}


//constructor function 
function Student(fn,ln,age){
        this.firstName = fn;
        this.lastName = ln;
        this.age =  age;
        this.getFullName =  function () {
            console.log(this.firstName + " " + this.lastName);
        }
}


let student3 = createStudent("Aravind", "HB", 33)
let student4 = new Student("Aravind", "HB", 33)
let student5 = new Student("XXXXXXX", "HB", 33)




 console.log(student1);
// console.log(student1.firstName);
// console.log(student1['age']);
// console.log(student2);

// //student1.address = "222, Rammurtynagar, Bangalore"
// console.log(student1.address);
// delete student1.age;
// console.log(student1);

student1.getFullName()
student2.getFullName()
student3.getFullName()
student4.getFullName()
student5.getFullName()

