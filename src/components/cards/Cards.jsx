import React, { useState } from 'react'
import { Card,Button,Input,Image,Stack,ButtonGroup,Divider, Heading,Text, CardBody, CardFooter} from '@chakra-ui/react'
export const Cards = ({Name,Prize}) => {


    const [count,setCount]=useState(0); 
    




  return (<>
    <Card maxW='240px'>          {/* maxumum width specified */}      
    <CardBody>
      <Image
        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
        alt='Green double couch with wooden legs'
        borderRadius='lg'
      />
      <Stack mt='6' spacing='3' alignItems={"center"}>
        <Heading size='md'>{Name}</Heading>
        <Text color='blue.600' fontSize='2s'>
        {Prize}
        </Text>
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter flexDirection='column ' alignItems='center'>
   
      <ButtonGroup spacing={'4'} >
        <Button variant='solid' bg={'green'} color={'white'} _hover={{bg: 'green.500'}} onClick={() => {setCount(count-1)}}>
        -
        </Button>
        <Input type='number' value={count} onChange={(e) => setCount(e.target.value)} maxW={'50px'} />                                {/**use state value(Hooks)  */}
        <Button variant='solid' bg={'green'} color={'white'} _hover={{bg: 'green.500'}} onClick={() => {setCount(count+1)}}>
        +
        </Button>
      </ButtonGroup>
      <Button marginTop={'20px'} maxW={'100px'} variant='ghost' bg={'green'} color={'white'} _hover={{bg: 'green.500'}}>
      Add to Cart
       </Button>
    </CardFooter>
  </Card>
  </>
  )
}

