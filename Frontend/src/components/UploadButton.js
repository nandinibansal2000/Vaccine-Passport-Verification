import React from "react";
import { Button } from "./ButtonDesign";

export default function UploadButton(props) {
  const hiddenFileInput = React.useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    console.log(fileUploaded);
  };

  return (
    <>
      <Button onClick={handleClick}>Upload Vaccination Certificate</Button>
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: "none" }}
      />
    </>
  );
}
