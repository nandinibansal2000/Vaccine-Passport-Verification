import { Button } from "./ButtonDesign";
import React, { useState } from "react";
import SignInPopup from "./SignInPopup.js";



export default function SignInButton() {
  const [isOpen, setOpen]  = useState(false);

  const setOpen_ = () => {
    console.log(isOpen);
    setOpen(!isOpen);
  }
 

  const handleClick = (event) => {
    setOpen_();
  };

  return (
    
    <>
    
      <Button onClick={handleClick}>SignUp</Button>
      {isOpen && <SignInPopup isOpen={isOpen} setOpen={setOpen_}/>}
    </>
  );
}
