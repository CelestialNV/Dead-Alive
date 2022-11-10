import './App.css';
import {useRef} from 'react';
import { useState } from 'react';
import Random from './functions/Random';
import HandleCase from './functions/HandleClick';
import Decompose from './functions/Decompose';
import Alive from './functions/Alive';
import Dead from './functions/Dead';

//Getting Random 4 digit Number
let number = Random();

const App = () => {
//Message to display
let [message, setMessage] = useState('');

//Input of the user
let inputRef = useRef('');

//Initializing the answer
let answer = Decompose(inputRef.current.value);

let event = () =>{
//Getting the answer from the input
answer = Decompose(inputRef.current.value);

//Setting up the message using usestate
setMessage(HandleCase(answer,Dead(number,answer),Alive(number,answer)-Dead(number,answer)));

}

  return (
    <div>
      <h1>{number.get(0)}{number.get(1)}{number.get(2)}{number.get(3)}</h1>
      <input ref={inputRef} type="text" name='field' id='field' placeholder='Enter your Guess'/>
      <button name='submit' id='submit'  onClick={event}>Submit</button>
      <h3>Message : {message}</h3>
    </div>
  );
}

export default App;
