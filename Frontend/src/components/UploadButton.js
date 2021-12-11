import { Button } from "./ButtonDesign";
import React, { useState } from "react";
import QrcodeDecoder from 'qrcode-decoder';
import QRReader from "../components/QRReader";



export default function UploadButton({qrJsonData, setQrscan, verified}) {
  // var qr = new QrcodeDecoder();
  const hiddenFileInput = React.useRef(null);
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
    
      <Button onClick={handleClick}>Scan QR to Verify</Button>
      <input
        type="file"
        ref={hiddenFileInput}
        // onChange={handleChange}
        style={{ display: "none" }}
      />
      {isOpen && verified ==null && <QRReader 
                  qrJsonData={qrJsonData}
                  setQrscan={setQrscan}
                  isOpen={isOpen}
                  setOpen={setOpen_}
                  />}
      {isOpen && !verified &&
        <p>Sorry the data isn't uploaded.</p>
      }
      {isOpen && verified &&
        <div>
        <p>Verification Successful.</p>
        <p>The following data was found: </p>
        <p>Name: {qrJsonData["name"]}</p>
        <p>DOB: {qrJsonData["dob"]}</p>
        <p>Aadhar ID: {qrJsonData["aadharID"]}</p>
        <p>Gender: {qrJsonData["gender"]}</p>
        <p>No. Doses: {qrJsonData["doseNo"]}</p>
        </div>
      }

    </>
  );
}
