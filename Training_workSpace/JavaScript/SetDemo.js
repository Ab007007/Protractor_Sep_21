const grade = new Set();

grade
.add('A')
.add('B')
.add('C')
.add('A')
.add('B')
.add('C')

console.log(grade.size);
console.log(grade.values());

grade.forEach(element => {
    console.log(element);
})

console.log("Using function Expression ");
grade.forEach(function(element) {
    console.log(element);
})

