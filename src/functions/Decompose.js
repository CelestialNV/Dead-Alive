//Function that Decomposes the answer and stores in a Map variable

const Decompose = (answer) =>{

//Initializing decomposed digit of the input answer
let digit;

//Initializing digit Map
let map = new Map();

//Decomposing the first digit
digit = answer/1000;

map.set(0,parseInt(digit));

answer = answer - parseInt(digit)*1000;

//Decomposing the second digit
digit = answer/100;

map.set(1,parseInt(digit));

answer = answer - parseInt(digit)*100;

//Decomposing the third digit

digit = answer/10;

map.set(2,parseInt(digit));

answer = answer - parseInt(digit)*10;

//Adding the final digit

digit = answer;

map.set(3,parseInt(digit));

return map

}


export default Decompose