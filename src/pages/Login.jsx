import { Box, Flex, Heading, FormControl, FormLabel, Input, Button, } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
//import { useState, useContext } from 'react'
//import { LoginContext } from '../contexts/LoginContext'

const Login = () => {
    // const [email, setEmail] = useState('')
    // const [loggedIn, setLoggedIn] = useState(false)

    //const { email, setEmail, loggedIn, setLoggedIn } = useContext(LoginContext)

    return (
       
        <Flex fontFamily={'fantasy'} flexDirection={'column'} backgroundColor={"#bcefbc"} height={"container.sm"} >
           
            <Button marginLeft='25px' colorScheme={'green'} color={'white'}>
            <Link to={"./"}>login</Link>
                
            </Button>
            <Flex alignItems={'center'} flexDirection={'column'}>

               
                <Box marginTop={'50px'} minW={'300px'} bg={'#80c48b'} padding={'25px'}>
                <Heading marginBottom={'50'}>Log-In your account</Heading>

                    <FormControl>
                        <FormLabel>Email address</FormLabel>
                        <Input type='email'/>
                       
                   
                    </FormControl>

                    <FormControl>
                        <FormLabel>Password</FormLabel>
                        <Input type='password' />
                    </FormControl>

                    <Button marginTop={'20px'} bg={'green'} color={'white'} _hover={{bg: 'green.500',  }}>
                       
                        Log In
                    </Button>
                    <Button marginLeft="35px" marginTop={'20px'} bg={'green'} color={'white'} _hover={{bg: 'green.500',  }}>
                       
                       sign-up
                   </Button>
                   

                </Box>
                {/* {loggedIn && <Heading color={'blue'}>{email}</Heading>} */}

            </Flex>
        </Flex>
    )
    }

export default Login