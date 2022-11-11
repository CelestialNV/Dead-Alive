const HandleCase = (answer,dead,alive) =>{
      
      
      if (dead === 4){
        return "Congratulations, You have succesfully guessed the number";
      }
      else{
        return "You caught "+dead+" dead and "+alive+" alive";
      }

  }

  export default HandleCase;