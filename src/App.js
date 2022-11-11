import './App.css';
import {useRef} from 'react';
import { useState } from 'react';
import Random from './functions/Random';
import HandleCase from './functions/HandleCase';
import Decompose from './functions/Decompose';
import Alive from './functions/Alive';
import Dead from './functions/Dead';
import AliveRabbit from './assets/bunny-alive.png';
import DeadRabbit from './assets/bunny-dead.png';

//Getting Random 4 digit Number
let number = Random();

const App = () => {
//Message to display
let [message, setMessage] = useState('');

//Rabbit State
let [rabbitState, setRabbitState] = useState([' ', ' ', ' ', ' ']);

//Input of the user
let inputRef = useRef('');

//Initializing the answer
let answer = Decompose(inputRef.current.value);

let event = () =>{

//Initializing Rabbit Array State
let state = [' ', ' ', ' ', ' '];

//Initilizing Dead Rabbit Index
let i = 0;

//Initilizing Dead Rabbit Index
let j = 0;


//Getting the answer from the input
answer = Decompose(inputRef.current.value);

//Setting up the message using usestate
setMessage(HandleCase(answer,Dead(number,answer),Alive(number,answer)-Dead(number,answer)));

//Assigning Dead Rabbit State
for(i;i<Dead(number,answer);i++){

state[i] = DeadRabbit;

}

//Assigning Alive Rabbit State
for(j =i;j<Alive(number,answer);j++){

  state[j] = AliveRabbit;
  
  }

//Setting the Rabbit state
setRabbitState(state);

}

  return (
    <div>
        <div>
          <img src={rabbitState[0]}  alt=''/>
          <img src={rabbitState[1]}  alt=''/>
          <img src={rabbitState[2]} alt=''/>
          <img src={rabbitState[3]}  alt=''/>
        </div>
        <div className='body'>
          <h1>{number.get(0)}{number.get(1)}{number.get(2)}{number.get(3)}</h1>
          <h3>Message : {message}</h3>
          <input ref={inputRef} type="text" name='field' id='field' placeholder='Enter your Guess'/>
          <button name='submit' id='submit'  onClick={event}>Submit</button>
          </div>
    </div>
  );
}

export default App;
