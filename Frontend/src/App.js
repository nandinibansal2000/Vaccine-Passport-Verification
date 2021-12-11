import React, {useState} from "react";
import Homepage from "./pages/Homepage";
import AddPassport from "./pages/AddPassport";
import Verify from "./pages/Verify";
import { signupToken, loginToken } from './Web3Client';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

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
        })
    }

  
  return (

    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Verify/>} />
          <Route exact path="/healthcare" element={<Homepage/>} />
          <Route path="/addpassport" element={<AddPassport/>} />
        </Routes>
      </Router>
    </>
    // <>
    //    <div>
    //     <h1>HI</h1>
    //     {!signedup ? (
    //       <button onClick ={() => signup()}> SIGNUP</button>
    //     ):(
    //       <p>Signedup Successfully!</p>
    //     )}
    //     <br></br>
    //     <br></br>

    //   </div>
     
    // </>
  )

}

export default App;
