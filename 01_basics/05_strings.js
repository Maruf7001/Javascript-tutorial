const name = "Maruf"
const repoCount = 50

//console.log(name + repoCount + "value");
//backdaded concatination
console.log(`Hello, I am ${name} and my repo count is ${repoCount}`);
//readable and updated concatination

const gameName = new String('hitesh-hc')

//console.log(gameName[0]);
//console.log(gameName.__proto__);
//console.log(gameName.length);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(2));
//console.log(gameName.indexOf("t"));


const newString = gameName.substring(0, 4)

console.log(newString);


const anotherString = gameName.slice(-8, 4)

console.log(anotherString);

const newStringOne = "    maruf    "

console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'));

console.log(url.includes('opiu'));

console.log(gameName.split('-'));


