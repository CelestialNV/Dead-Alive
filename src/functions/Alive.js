const Alive = (number, answer) =>{
//Initializing the number of digits that are alive
let alive = 0;
//Initializing the index

for(let i=0;i<4;i++){

    for(let j=0;j<4;j++){
        if(answer.get(i) === number.get(j)){
          alive = alive + 1;
          break;
        }
    }
}

return alive;

}


export default Alive;