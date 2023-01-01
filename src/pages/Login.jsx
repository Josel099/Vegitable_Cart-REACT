import {
  Box,
  Flex,
  Heading,
  FormControl,
  FormLabel,
  Text,
  Input,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { IoMdReturnLeft } from "react-icons/io";
import React, { useState } from "react";
//import { useState, useContext } from 'react'
//import { LoginContext } from '../contexts/LoginContext'

const Login = () => {
  const [email, setEmail] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)

  //const { email, setEmail, loggedIn, setLoggedIn } = useContext(LoginContext)

  return (
    <Flex
      fontFamily={"fantasy"}
      flexDirection={"column"}
      backgroundColor={"#bcefbc"}
      height={"container.sm"}
    >
      <Button
        marginLeft="10px"
        bgColor={"green.500"}
        maxWidth={"30px"}
        color={""}
        _hover={{ bg: "#6fb45d" }}
      >
        <Link to={"./"}>
          <IoMdReturnLeft />
        </Link>{" "}
        {/* don't working  !!!!!!!!! dosen't worling fix it */}
      </Button>
      <Flex alignItems={"center"} flexDirection={"column"}>
        <Box marginTop={"50px"} minW={"300px"} bg={"#80c48b"} padding={"25px"}>
          <Heading marginBottom={"50"}>Log-In your account</Heading>

          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type="email"onChange={(event)=>{
                setEmail(event.target.value);
            }} />
          </FormControl>

          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>

          <Button
            marginTop={"20px"}
            bg={"green.500"}
            color={"white"}
            _hover={{ bg: "#6fb45d" }}
            onClick={() => {setLoggedIn(true)}
            }
          >
            Log In
          </Button>
          <Text color={"#16213b"} _hover={{ textColor: "#42547d" }}>
            {" "}
            <a href="https://previews.agefotostock.com/previewimage/medibigoff/d86037499d1d8a2f6f5ddf77c97403fb/esy-050954463.jpg">
              don't have an account yet? signup now!{" "}
            </a>
          </Text>
        </Box>
        {loggedIn && <Heading color={"blue"}>{email}</Heading>}
      </Flex>
    </Flex>
  );
};

export default Login;
