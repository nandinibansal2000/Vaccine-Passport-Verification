import {Fab, TextField, TextareaAutosize, Grid} from '@material-ui/core'
import { GetApp} from '@material-ui/icons'
import QRcode from 'qrcode.react'

import React, { useEffect, useState, useContext } from "react";
import Modal from "react-modal";

import * as FaIcons from "react-icons/fa";
import {
  H1,
  Label,
  Input,
  SubmitButton,
  Container,
} from "../pages/AddPassportDesign";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Dropdown } from "semantic-ui-react";
import "semantic-ui-css/components/dropdown.min.css";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


const StyledDropdown = styled(Dropdown)`
  &.ui.selection.dropdown {
    .menu.visible {
      display: block;
    }
  }
`;

const customStyle = {
    content: {
      border: "none",
      maxWidth: "1000px",
      margin: "10px auto",
      padding: "10px 20px 0px",
      borderRadius: "8px",
    },
    overlay: { zIndex: "1001", backgroundColor: "rgba(52, 52, 52, 0.8)" },
  };
  

function QRCreator({isOpen, setOpen}) {
  var genderS = ["Male", "Female", "LQBTQ+"]
  var doseNumberS = ["1", "2", "3"]

  var genderSuggestions = []
  var doseNumberSuggestions = []
  var vaccineSuggestions = []
  var i;
  for (i = 0; i < genderS.length; i++) {
    genderSuggestions.push({ id: i, text: genderS[i], value: genderS[i] });
  }
  for (i = 0; i < doseNumberS.length; i++) {
    doseNumberSuggestions.push({ id: i, text: doseNumberS[i], value: doseNumberS[i] });
  }

  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");

  const [dob1, setDob1] = useState("");
  const [aadharId, setAadharId] = useState("");
  const [doseNo, setDoseNo] = useState(0);
 
  const [submit, handleSubmit_] = useState(false);

  const setDob_ = (date) => {
   
    // setDob(dob_);
    // console.log(date);
    
    if(date){
      // var d = date.toISOString().split('T')[0];
      // console.log(d);
       let dob_ = date.toLocaleDateString('en-US', {year: 'numeric', month: '2-digit', day: '2-digit'});
      setDob1(date);
      setDob(dob_);
    }
  }

  var qr = {
      "name": name,
      "gender": gender,
      "dob": dob,
      "aadharId": aadharId,
      "doseNo": doseNo
  }
  
    const handleSubmit = () => {
        handleSubmit_(!submit);
    };

    const downloadQR = () => {
        const canvas = document.getElementById("myqr");
        const pngUrl = canvas
          .toDataURL("image/png")
          .replace("image/png", "image/octet-stream");
        let downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = "myqr.png";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };

    const customStyle = {
        content: {
          border: "none",
          maxWidth: "800px",
          margin: "10px auto",
          padding: "10px 20px 0px",
          background: "#f4f7f8",
          borderRadius: "8px",
        },
        overlay: { zIndex: "1000" },
      };
      const handleSubmitIssue = () =>{
  
    }
    
     let popup = null;
        popup = (
        <div style={{width: "50%", padding: "10px", marginLeft:"25%", backgroundColor:""}}>
            <H1> Add Your Details to Generate QR </H1>
    
            <fieldset style={{ marginRight: "5%", border: "none" }}>
            
            <Container>
              <p style={{width: "150px"}}>Name: </p>
              <Input
                value={name}
                maxLength="128"
                onChange={(evt) => setName(evt.target.value)}
                type="text"
                id="name"
              />
            </Container>
            
            <Container>
              <p style={{width: "150px"}}>Gender:</p>
              <StyledDropdown
                placeholder="Choose Gender"
                search
                selection
                options={genderSuggestions}
                onChange={(event, { value }) => setGender(value)}
              />
            </Container>
    
            <Container>
              <p style={{width: "150px"}}>Date of Birth:</p>
              <DatePicker selected={dob1} onChange={(date) => setDob_(date)} />
            </Container>
              <br></br>
              <Container>
              <p style={{width: "150px"}}>Aadhar ID:</p>
              <Input
                value={aadharId}
                maxLength="128"
                onChange={(evt) => setAadharId(evt.target.value)}
                type="text"
                id="name"
              />
              </Container>
              <br></br>
              <br></br>
              <hr/>
    
              <Container>
                <p style={{width: "150px"}}>Dose Number:</p>
              <StyledDropdown
                placeholder="Choose Dose"
                search
                selection
                options={doseNumberSuggestions}
                onChange={(event, { value }) => setDoseNo(value)}
              />
              </Container>

              <SubmitButton
                onClick={handleSubmit}
                type="submit"
                style={{ cursor: "pointer" }}
              >
                Submit
              </SubmitButton>
              <Label style={{ marginTop: "10px" }} />
            </fieldset>
            </div>
        );

    return (
      <Modal isOpen={isOpen} style={customStyle}>
            <button
            onClick={setOpen}
            style={{
            position: "absolute",
            border: "none",
            top: "20px",
            right: "20px",
            cursor: "pointer",
            padding: "3px",
            }}
          >
          <FaIcons.FaTimes />
          </button>
      <div>
            
            {popup}

            <div style={{paddingLeft: "35%"}}>
            {
                submit &&
                <QRcode 
                    id="myqr"
                    value={JSON.stringify(qr)} 
                    size={320}
                    includeMargin={true}
                />
                }
            </div>
            {
                submit &&
                <p> The generated QR will only work if your details has been uploaded
                    to the blockchain by the authorized healthcare worker.
                </p>
            }
      </div>
      </Modal>
    );
  }
  
  export default QRCreator;