class Employee {

    constructor(name, id)
    {
        this.name = name;
        this.id = id;
    }

    location() {
        console.log("Pune");
    }
}


let emp1 = new Employee("Harry", "EMP1234");
console.log(emp1.name + " and " + emp1.id ) ;
emp1.location()