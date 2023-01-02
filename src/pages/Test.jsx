import React from "react";
import Login from "./Login";
import {  Heading } from "@chakra-ui/react";
import {LoginContext} from "../contexts/LoginContext"
import { useState} from "react";
// import Navbar from "../components/Navbar/Navbar";
const Test = () => {
    const [email, setEmail] = useState('')
    const [loggedIn, setLoggedIn] = useState(false)
  return (
    <div>
        {/* <Navbar/> */}
        <LoginContext.Provider value={{email,setEmail,loggedIn,setLoggedIn}}>
        <Login />
        </LoginContext.Provider>
        {loggedIn && <Heading color={"blue"}>{email}</Heading>}
    </div>
  );
};

export default Test;
