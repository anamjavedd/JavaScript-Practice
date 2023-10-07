let score = "33sdfghj"
let score2 = null
let decision = true
let undefinedd = undefined
console.log(typeof score)
console.log(typeof (score))

let valueInNumber = Number(score)
let score3 = Number(score2)
let decision1 = Number(decision)
let un = Number(undefinedd)

console.log( valueInNumber);
console.log(score3);
console.log(decision1);
console.log(un);  


// ************OPERATIONS**********

let value = 2

let negvalue = -value

console.log(negvalue);

let str1 = "anam"
let str2 = " hello"

let str3 = str1 + str2

console.log(str3);

console.log("1" + 2);
console.log(1 + "2");

console.log("1" + 2+2);

console.log(1 + 2 + "2");

console.log(+true);
console.log(+"");

// AVOID THESE CONVERSIONS
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
 //In js == and <, > are treated differently. In the latter null is treated as 0
console.log(undefined == 0);

console.log("2" === 2);
 





