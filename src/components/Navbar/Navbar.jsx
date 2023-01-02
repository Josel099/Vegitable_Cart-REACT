import React ,{useContext}from "react";
import { Flex, Input, Heading, Text, Button } from "@chakra-ui/react";
import { BsSearch, BsCart4 } from "react-icons/bs"; // icons
//import {} from 'react-icons/bs';// icons
import { Link } from "react-router-dom";
import {SearchContext} from "../../contexts/Searchcontext"

const Navbar = () => {
  const { query,setQuery } = useContext(SearchContext)
  return (
    <Flex
      justify="center"
      bg="#d3f5d3"
      height="110px"
      color="#006442"
      align="center"
    >
      <Heading fontSize={"50px"} fontFamily={"fantasy"}>
        Veggy{" "}
      </Heading>
      <flex>
        <Input
          height={"37"}
          textColor={"black"}
          borderColor={"#006442"}
          marginLeft="50px"
          w="490px"
          variant="outline"
          placeholder="search the vegitables"
          borderEndRadius={"none"}
          onChange={(e) => setQuery(e.target.value)}
        
        />
        <Button
          colorScheme="green"
          borderLeftRadius={"none"}
          borderColor={"#80ff80"}
          borderWidth={"thin"}
          color="white"
          borderLeftWidth={"0px"}
        >
          <BsSearch /> {/**React icon component */}
        </Button>
      </flex>

      <Flex marginLeft="50px">
        <Flex flexDirection={"column"} align="end">
          <Text fontWeight={"bold"} color={"##006442"}>
            No.of items : 0
          </Text>
          <Text fontWeight={"bold"} color={"#006442"}>
            Sub Total : 0
          </Text>
        </Flex>
        <Button marginLeft="25px" colorScheme={"green"}>
          {" "}
          <BsCart4 size={"25px"} />{" "}
        </Button>
      </Flex>
      <Flex>
        <Button
          marginLeft="25px"
          colorScheme={"green"}
          color={"white"}
          marginBottom={"2.5"}
        >
          <Link to={"./test"}>login</Link>
        </Button>
      </Flex>
    </Flex>
  );
};

export default Navbar;


