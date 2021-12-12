import {Fab, TextField, TextareaAutosize, Grid} from '@material-ui/core'
import { GetApp} from '@material-ui/icons'
import QRcode from 'qrcode.react'
import { signupToken, loginToken } from '../Web3Client';
import { useNavigate } from "react-router-dom";
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
  

function LoginPopup({isOpen, setOpen}) {

 
  const [name, setName] = useState("");

  const [password, setPassword] = useState("");
 
  const [submit, handleSubmit_] = useState(false);

  const navigate = useNavigate();
  

    const handleLogin = async (license, password) => {
        // Login Call Goes Here
        console.log(license, password)
        try{
            // username is license
            await loginToken(license, password);
            sessionStorage.setItem('license', license);

            console.log("Successful");
            navigate("/addpassport");
        }
        catch {
            console.log("failed");
        }
    };

    const handleSubmit = () => {
        handleSubmit_(!submit);

        handleLogin(name,password);
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

    
     let popup = null;
        popup = (
        <div style={{width: "50%", padding: "10px", marginLeft:"25%", backgroundColor:""}}>
            <H1> Enter Login Details </H1>
    
            <fieldset style={{ marginRight: "5%", border: "none" }}>
            
            <Container>
              <p style={{width: "150px"}}>License No.: </p>
              <Input
                value={name}
                maxLength="128"
                onChange={(evt) => setName(evt.target.value)}
                type="text"
                id="name"
              />
            </Container>
            
        
              <br></br>
              <Container>
              <p style={{width: "150px"}}>Password:</p>
              <Input 
                type = "password"
                value={password}
                maxLength="128"
                onChange={(evt) => setPassword(evt.target.value)}
                id="name"
              />
              </Container>
              <br></br>
              <br></br>
              <hr/>
    
      
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

          
      </div>
      </Modal>
    );
  }
  
  export default LoginPopup;