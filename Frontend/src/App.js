import React, {useState, useEffect} from 'react';
import Homepage from "./pages/Homepage";
import Web3 from 'web3';
import { init, signupToken } from './Web3Client';
// import {HEALTH_CARE_SIGNUP, HEALTH_CARE_SIGNUP_ADDRESS} from "./config";

function App() { 
  const [signedup, setSignedup] = useState(false);

  const signup = () => {
    signupToken()
    .then(tx =>{
       setSignedup(true);
       console.log(tx);
    })
    .catch(err => {
        console.log(err);
    })
  }

  



 


  return (
      <div>
      <h1>HI</h1>
      {!signedup ? (
         <button onClick ={() => signup()}> SIGNUP</button>
      ):(
        <p>Signedup Successfully!</p>
      )}
        {/* <Homepage></Homepage> */}
      </div>
    );
  
}

export default App;
