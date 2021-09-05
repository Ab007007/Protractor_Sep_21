const resto = new Map();
resto.set('name' , 'Nandana Palace')
resto.set(1,'Bangalore india')

resto
.set('categories',['Andra Style', 'Chines', 'North indian', 'South Indian'])
.set('open' , 11)
.set('close', 23)
.set(true, 'We are Open')
.set(false, 'We are Closed')

//FUN
time = 15
console.log(resto.get((time >= resto.get('open') && time <= resto.get('close'))));


console.log(`Convert Maps To Array`);
console.log(resto);
console.log(...resto);
console.log(resto.get('name'))

if(resto.has(10))
{
    resto.delete(1)
}
console.log(resto);
