import React, { useState } from "react";
import Homepage from "./pages/Homepage";
import { signupToken, loginToken } from './Web3Client';

function App() {
  const [signedup, setSignedup] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const signup = () => {
    signupToken()
      .then((tx) => {
        setSignedup(true);
        console.log(tx);
      })
      .catch((err) => {
        console.log(err);
    })
  }

   const login = () => {
    loginToken()
    .then(tx =>{
       setLoggedIn(true);
       console.log(tx);
    })
    .catch(err => {
        console.log(err);
    })
  }

  
  return (
    <>
      <Homepage></Homepage>
       {/* <div>
        <h1>HI</h1>
        {!signedup ? (
          <button onClick ={() => signup()}> SIGNUP</button>
        ):(
          <p>Signedup Successfully!</p>
        )}
        <br></br>
        <br></br>

        {!loggedIn ? (
          <button onClick ={() => login()}> LOGIN</button>
        ):(
          <p>Logged In Successfully!</p>
        )}
      </div> */}
    
    </>
  )

}

export default App;
