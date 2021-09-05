const friend1 = "abc"
const friend2 = "pqr"
const friend3 = "xyz"

const friends = ['abc', 'pqr', 'xyz']
console.log(friends);
console.log(friends[0]);
console.log(`length of the array ${friends.length}`);


let fruits = ['Apple' , 'Banana', 'Jackfruit']

console.log(`Elements of the array before push ${fruits}`);
fruits.push('Cherry')
console.log(`Elements of the array after push ${fruits}`);

console.log(`Elements of the array before pop ${fruits}`);
fruits.pop()
console.log(`Elements of the array after pop ${fruits}`);


console.log(`Elements of the array before shift ${fruits}`);
fruits.shift()
console.log(`Elements of the array after shift ${fruits}`);

console.log(`Elements of the array before un-shift ${fruits}`);
fruits.unshift('Lemon')
console.log(`Elements of the array after un-shift ${fruits}`);

console.log(`Elements of the array before delete ${fruits}`);
delete fruits[1];
console.log(`Elements of the array after delete  ${fruits}`);
fruits[1] = 'Orange'
console.log(`Elements of the array after replacing  ${fruits}`);

let citrusFruits = fruits.slice(1,3)

console.log(`New Array - ${citrusFruits}`);

// remove
console.log(`Elements of the array before splice ${fruits}`);
fruits.splice(1,1)
console.log(`Elements of the array after splice  ${fruits}`);


//add
console.log('-----------------------');
console.log(`Elements of the array before splice ${fruits}`);
fruits.splice(1,0,'Orange','Mango')
console.log(`Elements of the array after splice  ${fruits}`);
//replace
fruits.splice(1,1,"XXXXXXXXXXXXX")
let veggies = ['carrot','capsicum','tomato']

let all = fruits.concat(veggies)
console.log(all);

console.log(all.join(' '));

let board = [
    [1,2,3],
    [4,5,6,7],
    [8,9]

]
console.log("################ printing 2D array ################");
console.log(board);
console.log(board[0]);
console.log(board[0][2]);