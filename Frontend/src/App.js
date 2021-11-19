import React, { useState } from "react";
import Homepage from "./pages/Homepage";
import { signupToken } from "./Web3Client";

function App() {
  const [signedup, setSignedup] = useState(false);

  const signup = () => {
    signupToken()
      .then((tx) => {
        setSignedup(true);
        console.log(tx);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
      </div> */}
      );
    </>
  );
}

export default App;
