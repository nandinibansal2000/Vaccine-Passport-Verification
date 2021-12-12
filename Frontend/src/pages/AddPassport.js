import React, { useEffect, useState, useContext } from "react";

import * as FaIcons from "react-icons/fa";
import {
  H1,
  Label,
  Input,
  SubmitButton,
  Container,
} from "./AddPassportDesign";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Dropdown } from "semantic-ui-react";
import "semantic-ui-css/components/dropdown.min.css";
import DatePicker from "react-datepicker";
import { addVaccineDetailToken } from '../Web3Client';


import "react-datepicker/dist/react-datepicker.css";

const StyledDropdown = styled(Dropdown)`
  &.ui.selection.dropdown {
    .menu.visible {
      display: block;
    }
  }
`;

 export default function AddPassport ({ page }) {

  var genderS = ["Male", "Female", "LQBTQ+"]
  var doseNumberS = ["1", "2", "3"]
  var vaccineS = ["Covaxin", "Covishield", "Pfizer"]

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
  for (i = 0; i < vaccineS.length; i++) {
    vaccineSuggestions.push({ id: i, text: vaccineS[i], value: vaccineS[i] });
  }

  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState(new Date());
  const [aadharId, setAadharId] = useState("");

  const [doseNo, setDoseNo] = useState(0);
  const [batchId, setBatchId] = useState("");
  const [vaccineName, setVaccineName] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [placeOfVaxx, setPlaceOfVaxx] = useState("");

  const [license, setLicense] = useState("");
  const [password, setPassword] = useState("");

  const [submitted, setSubmitted] = useState(null);


  const clearData = () => {
    setName("");
    setGender("");
    setDob("");
    setAadharId("");
    setDoseNo("");
    setBatchId("");
    setVaccineName("");
    setManufacturer("");
    setPlaceOfVaxx("");
    setLicense("");
    setPassword("");
  };

  // Nandini TODO: call addVaccineDetail
  const handleSubmitIssue = async () =>{
      let dob_ = dob.toLocaleDateString('en-US', {year: 'numeric', month: '2-digit', day: '2-digit'});
      console.log(name);
      console.log(gender);
      console.log(dob_);
      console.log(aadharId);
      console.log(doseNo);
      console.log(batchId);
      console.log(vaccineName);
      console.log(manufacturer);
      console.log(placeOfVaxx);
      console.log(license);
      console.log(password);
      try{
         await addVaccineDetailToken(name , gender, dob_, aadharId, doseNo, batchId, vaccineName, manufacturer, placeOfVaxx,license, password);
        console.log("Added vaccine details")
        }
      catch{
        console.log("Failed")
      }
     

      // if submitted, setSubmitted(true);
      // if submission fails, setSubmitted(false);

  }


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
        <H1> Add New Information </H1>

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
          <DatePicker selected={dob} onChange={(date) => setDob(date)} />
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
            placeholder="1"
            search
            selection
            options={doseNumberSuggestions}
            onChange={(event, { value }) => setDoseNo(value)}
          />
          </Container>
          <br></br>
          <br></br>
          <Container>
            <p style={{width: "150px"}}>Vaccine Name:</p>
          <StyledDropdown
            placeholder="Vaccine Name"
            search
            selection
            options={vaccineSuggestions}
            onChange={(event, { value }) => setVaccineName(value)}
          />
          </Container>

          <Container>
            <p style={{width: "150px"}}>Batch Number:</p>
          <Input
            value={batchId}
            maxLength="128"
            onChange={(evt) => setBatchId(evt.target.value)}
            type="text"
            id="name"
          />
          </Container>

          <Container>
            <p style={{width: "150px"}}>Place of Vaccination:</p>
          <Input
            value={placeOfVaxx}
            maxLength="128"
            onChange={(evt) => setPlaceOfVaxx(evt.target.value)}
            type="text"
            id="placeVaxx"
          />
          </Container>
          <Container>
            <p style={{width: "150px"}}>Manufacturer:</p>
          <Input
            value={manufacturer}
            maxLength="128"
            onChange={(evt) => setManufacturer(evt.target.value)}
            type="text"
            id="manufacturer"
          />
          </Container>
            <hr/>
          <br/><br/>
          <Container>
            <p style={{width: "150px"}}>License ID:</p>
          <Input
            value={license}
            maxLength="128"
            onChange={(evt) => setLicense(evt.target.value)}
            type="text"
            id="name"
          />
          </Container>

          <Container>
            <p style={{width: "150px"}}>Password:</p>
          <Input
            value={password}
            maxLength="128"
            onChange={(evt) => setPassword(evt.target.value)}
            type="password"
            id="name"
          />
          </Container>
          
          <SubmitButton
            onClick={handleSubmitIssue}
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
    <div>
      {submitted == null && popup}
      {submitted == false && <p>Sorry, there was an error</p>}
      {submitted == true && <p>Your data has been added Successfully</p>}
    </div>
  );
};

