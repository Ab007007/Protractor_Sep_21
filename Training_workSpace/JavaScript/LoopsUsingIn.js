
let fruits = ['Apple', 'Banana', 'Orange', 'Grapes' , 'Mango']

for(i in fruits)
{
    console.log(fruits[i]);
}

console.log("---- Using For Of Loop ----------");
for(f of fruits)
{
    console.log(f);
}

console.log("---- Using for Each loop -----------");

fruits.forEach(function (f)
{
    console.log(f);   
})




