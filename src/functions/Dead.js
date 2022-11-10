const Dead = (number, answer) =>{
//Initializing the number of digits that are dead
let dead = 0;
//Initializing the index
let i = 0;

for(i=0;i<4;i++){
    if(answer.get(i) === number.get(i)){
      dead = dead + 1;
    }
}

return dead;
}


export default Dead;