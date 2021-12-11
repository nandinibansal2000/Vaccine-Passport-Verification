import { Button } from "./ButtonDesign";
import React, { useState } from "react";
import QRCreator from "../components/QRCreator";



export default function CreateQRButton() {
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
    
      <Button onClick={handleClick}>Create QR</Button>
      {isOpen && <QRCreator isOpen={isOpen} setOpen={setOpen_}/>}
    </>
  );
}
