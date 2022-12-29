import React ,{useState,useEffect}from 'react'
import {   SimpleGrid,Flex ,Input } from '@chakra-ui/react' //GridItem
import Navbar from '../components/Navbar/Navbar'//exported defaultly
import {Cards} from '../components/cards/Cards'



 export const Home = () => {

  {/*const Prize=[
    "jai",
    "me",
    "roy",
    "ajil",
    "ravi",
    "kannan",
    "neethu",
    "manasa",
    "rejini"
]

const Name=[
  "jai",
  "me",
  "roy",
  "ajil",
  "ravi",
  "kannan",
  "neethu",
  "manasa",
  "rejini"
] */}

  //const [query,setQuery]=useState("")
  const [name, setName] = useState([])
  const [price, setPrice] = useState([])







  useEffect(() => {                                                                           //using for veg nameee
  fetch("https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json")
  .then(res => res.json())                                                                    // to chang the api in an readable format
  .then(
    (data) => {
      console.log(data)                                                                        // setname (data) : render all the data in api
      setName(data.map((item) => item.name))
      setPrice(data.map((val) => val.price))
      console.log(name)
      console.log(price)
    }
  )
}, [])


// useEffect(() => {                                                                           //using for veg nameee
//   fetch("https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json")
//   .then(res => res.json())                                                                    // to chang the api in an readable format
//   .then(
//     (data) => {
//       //console.log(data)   
//       const arrayofobjects =[                                                                    // setname (data) : render all the data in api
//       setName(data.map((item) => item.name)),
//       setPrice(data.map((val) => val.price))
//       //console.log(name)
//       //console.log(price)
//     ]
//     }
//   )
// }, [])
  // function Search (items){
  //   return items.filter((name) =>name.toLowerCase().includes(query.toLowerCase()))
 


  return (
  <Flex bg='#d4edd3' flexDirection={"column"}>          {/*in flex it is in row through flexdirection we change the direction to column */}

  <Navbar/> 

  {/* <Input  marginLeft='50px' w='490px' variant='outline' placeholder='search the vegitables' onChange={(e) => setQuery(e.target.value)}/>  */}


  <SimpleGrid  templateColumns='repeat(4, 1fr)' gap={0} paddingLeft='200px' paddingRight='200px'paddingTop={'40px'}>
 {/* 
 <Cards Name="helloo woels"/>
  <Cards/>
  <Cards/>
  <Cards/>
  <Cards/>
  <Cards/>
  <Cards/>
  <Cards/>
  */} 



{ (name).map((item,val,index) => {
  return (
  <Cards Name={item} Prize={val}  key={index}/>
  )
  } )}




  
  </SimpleGrid >
  
 
    </Flex>//"100 vh"- vh is veiw height 
  )
                                              
  }

//export default Home