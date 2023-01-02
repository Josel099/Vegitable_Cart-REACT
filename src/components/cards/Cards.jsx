import React, { useState } from "react";
import {
  Card,
  Button,
  Input,
  Image,
  Stack,
  ButtonGroup,
  Divider,
  Heading,
  Text,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
export const Cards = ({ Name, Prize, Imag }) => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Card
      maxW={"240px"}
       
        backgroundColor={"#eaffdb"}
        _hover={{ transform: "scale(1.01)", boxShadow:'2xl' }}
        boxShadow={'lg'}
        
      >
        {" "}
        {/* maxumum width specified */}
        <CardBody>
          <Image
            src={Imag}
            _hover={{ transform: "scale(1.1)" }}
            borderRadius="full"
            alt="Some thing went wrong"
            boxShadow={"md"}
          ></Image>

          <Stack mt="6" spacing="3" alignItems={"center"}>
            <Heading color={"#006442"} fontFamily={"mo"} size="md">
              {Name}
            </Heading>
            <Text color="#3a543a" fontSize="2s" fontWeight={"bold"}>
              {Prize} ₹
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter flexDirection="column " alignItems="center">
          <ButtonGroup spacing={""}>
            <Button
              variant="solid"
              bg={"#6fb86f"}
              color={"white"}
              _hover={{ bg: "#6fa36f" }}
              onClick={() => {
                setCount(count - 1);
              }}
            >
              -
            </Button>
            <Input
              type="number"
              value={count}
              onChange={(e) => setCount(e.target.value)}
              maxW={"60px"}
            />{" "}
            {/**use state value(Hooks)  */}
            <Button
              variant="solid"
              bg={"#6fb86f"}
              color={"white"}
              _hover={{ bg: "#6fa36f" }}
              onClick={() => {
                setCount(count + 1);
              }}
            >
              +
            </Button>
          </ButtonGroup>
          <Button
            marginTop={"15px"}
            width={"200px"}
            variant="solid"
            bg={"#9ff39f"}
            color={""}
            _hover={{ bg: "#82da92" }}
          >
            Add to Cart
          </Button>

          {/* <Button marginTop={'15px'} width={'200px'} variant='ghost' bg={'#749b55'} color={'white'} _hover={{bg: '#5f8147'}}>
      Add to Cart
       </Button> */}
        </CardFooter>
      </Card>
    </>
  );
};
