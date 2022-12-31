import React, { useState, useEffect } from "react";
import { SimpleGrid, Flex } from "@chakra-ui/react"; //GridItem
import Navbar from "../components/Navbar/Navbar"; //exported defaultly
import { Cards } from "../components/cards/Cards";

export const Home = () => {
  const [data, setData] = useState([{ name: "", price: "", image: "" }]);

  useEffect(() => {
    fetch(
      "https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json"
    )
      .then((res) => res.json()) // to chang the api in an readable format
      .then((data) => {
        console.log(data);
        setData(
          data.map((data) => {
            return {
              name: data.name,
              image: data.image,
              price: data.price,
            };
          })
        );
      });
  });

  // function Search (items){
  //   return items.filter((name) =>name.toLowerCase().includes(query.toLowerCase()))

  return (
    <Flex bg="#e3ffe3" flexDirection={"column"}>
      {" "}
      {/*in flex it is in row through flexdirection we change the direction to column */}
      <Navbar />
      {/* <Input  marginLeft='50px' w='490px' variant='outline' placeholder='search the vegitables' onChange={(e) => setQuery(e.target.value)}/>  */}
      <SimpleGrid
        templateColumns="repeat(4, 1fr)"
        gap={0}
        paddingLeft="200px"
        paddingRight="200px"
        paddingTop={"40px"}
      >
        {data.map((obj) => {
          return (
            //obj is a functon variable which maped with the data stored in the api
            <Cards Name={obj.name} Prize={obj.price} Imag={obj.image} />
          );
        })}
      </SimpleGrid>
    </Flex>
  );
};
