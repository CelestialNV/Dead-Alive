const Random = () => {

//Initializing map
let map = new Map();

//Available digits to choose from
const available = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

//Initializing index
let index = 0;

//Initializing number
let number = 0;

//Adding random digits to the map while deleting them from the available digits table to avoid repetition
for(let i=0; i<4;i++){

  index = Math.floor(Math.random() * available.length);
  number = available[index];
  map.set(i, number);
  available.splice(index, 1);

}

return map;

}



export default Random;
