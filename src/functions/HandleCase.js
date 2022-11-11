const HandleCase = (answer,dead,alive) =>{

    if(answer.get(0) > 9){
      return 'Number must have exactly 4 digits';
    }
      else if (dead === 4){
        return "Congratulations, You have succesfully guessed the number";
      }
      else{
        return "you Have "+dead+" Dead and "+alive+" alive";
      }

  }

  export default HandleCase;