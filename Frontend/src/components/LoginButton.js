import { Button } from "./ButtonDesign";
import React, { useState } from "react";
import LoginPopup from "./LoginPopup.js";



export default function LoginButton() {
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
    
      <Button onClick={handleClick}>Login</Button>
      {isOpen && <LoginPopup isOpen={isOpen} setOpen={setOpen_}/>}
    </>
  );
}
