import React, { useState } from "react";
import LoginModal from "react-login-modal";
import { signupToken, loginToken } from '../Web3Client';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
  

    const handleSignup = async(license, hospital, email, password) => {
        try{
            // username is license
            await signupToken(license, hospital,email, password);
            sessionStorage.setItem('license', license);

            console.log("Successful");
            navigate("/addpassport");
        }
        catch {
            console.log("failed");
        }
    };
    const handleLogin = async (license, password) => {
        // Login Call Goes Here
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
    return (
        <>
         <LoginModal
        handleSignup={handleSignup}
        handleLogin={handleLogin}
        buttonColor={"#52AE64"}
        disabledButtonColor={"#C7E4CD"}
        buttonHoverColor={"#A7D5B0"}
        
        /> 
        




        {/* <p>Note: Username is the license number of the healthworker</p> */}
        </>
        
    );
}

export default Login;

