import React, { useState } from 'react'
import { Card,Button,Input,Image,Stack,ButtonGroup,Divider, Heading,Text, CardBody, CardFooter} from '@chakra-ui/react'
export const Cards = ({Name,Prize}) => {


    const [count,setCount]=useState(0); 
    




  return (<>
    <Card maxW='240px'  backgroundColor={"#eaffdb"}>          {/* maxumum width specified */}      
    <CardBody>
      <Image
        src='https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/broccoli.jpg'
        alt='Green double couch with wooden legs'
        borderRadius='lg'
      />
      <Stack mt='6' spacing='3' alignItems={"center"}>
        <Heading color={"#006442"} fontFamily={"mo"} size='md'>{Name}</Heading>
        <Text color='#3a543a' fontSize='2s' fontWeight={"bold"}>
        {Prize} ₹ 
        </Text>
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter flexDirection='column ' alignItems='center'>
   
      <ButtonGroup spacing={'4'} >
        <Button variant='solid' bg={'#6fb86f'} color={'white'} _hover={{bg: '#6fa36f'}} onClick={() => {setCount(count-1)}}>
        -
        </Button>
        <Input type='number' value={count} onChange={(e) => setCount(e.target.value)} maxW={'60px'} />                                {/**use state value(Hooks)  */}
        <Button  variant='solid' bg={'#6fb86f'} color={'white'} _hover={{bg: '#6fa36f'}} onClick={() => {setCount(count+1)}}>
        +
        </Button>
      </ButtonGroup>
      <Button marginTop={'20px'} maxW={'100px'} variant='ghost' bg={'#749b55'} color={'white'} _hover={{bg: '#5f8147'}}>
      Add to Cart
       </Button>
    </CardFooter>
  </Card>
  </>
  )
}

