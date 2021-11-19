import React from "react";
import LoginModal from "react-login-modal";
 
const Login = () => {
    const handleSignup = (username, email, password) => {
        // Sign Up Call Goes Here
    };
    const handleLogin = (username, password) => {
        // Login Call Goes Here
    };
    return (
        <LoginModal
        handleSignup={handleSignup}
        handleLogin={handleLogin}
        buttonColor={"#52AE64"}
        disabledButtonColor={"#C7E4CD"}
        buttonHoverColor={"#A7D5B0"}
        // errorMessage={"Incorrect username or password"}
        // errorEnable={true}
        />
    );
}

export default Login;

