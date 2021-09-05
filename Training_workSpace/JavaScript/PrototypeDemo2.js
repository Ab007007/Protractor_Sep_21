let EmployeeDetails = function (name,id) {
    this.name = name;
    this.id = id;

}
EmployeeDetails.prototype.getName = function() {
    return this.name;
}

EmployeeDetails.prototype.id = function() {
    return this.id;
}
let emp1 = new EmployeeDetails("ADFADF" , 33)

let emp2 = new EmployeeDetails("werwr" , 22)

console.log(emp1.getName());
