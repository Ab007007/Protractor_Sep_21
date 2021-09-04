console.log("String Demo");

const fn = "Aravinda "
const ln = "HB"
const birthYear = 1983
const year = 2021


const info = "i'm " + fn + "," + ln + " and i'm " + (year - birthYear) + " years old"
console.log(info);

//templet literal
const infoUsingTemplet = `i'm ${fn} ${ln} and i'm ${year - birthYear} Years old`

console.log(infoUsingTemplet);

console.log(`Char at index 2 ${fn.charAt(2)}`);
console.log(`Index of A ${fn.indexOf("a")}`);
console.log(`Last Index of A ${fn.lastIndexOf("a")}`);
console.log(`Length of the String ${fn.length}`);
console.log(`With out trim  ${fn}`);
console.log(`Trim ${fn.trim()}`);
console.log(`To Upper ${fn.toUpperCase()}`);
console.log(`To lower case ${fn.toLocaleLowerCase()}`);


