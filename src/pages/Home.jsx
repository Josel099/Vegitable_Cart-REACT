import React ,{useState,useEffect}from 'react'
import {   SimpleGrid,Flex ,Input } from '@chakra-ui/react' //GridItem
import Navbar from '../components/Navbar/Navbar'//exported defaultly
import {Cards} from '../components/cards/Cards'



 export const Home = () => {

 
  //const [query,setQuery]=useState("")
  const [name,setName] = useState([])
  const [price, setPrice] = useState([])
//useState([{name:"",price:""}])
  
  //const [info,setInfo]=useState([{name:"",price:""}])

  // useEffect(() => {                                                                           //using for veg nameee
  //   fetch("https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json")
  //   .then(res => res.json())                                                                    // to chang the api in an readable format
  //         setInfo(info.map((item)=>{name:item.name,price=item.price})))
  // }, [])




  useEffect(() => {                                                                           //using for veg nameee
  fetch("https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json")
  .then(res => res.json())                                                                    // to chang the api in an readable format
  .then(
    (data) => {
      console.log(data)                                                                        // setname (data) : render all the data in api
    setName(data.map((item) => item.name))
      setPrice(data.map((value) => value.price))
      console.log(name)
      console.log(price)
    }
  )
}, [])



  // function Search (items){
  //   return items.filter((name) =>name.toLowerCase().includes(query.toLowerCase()))
 


  return (
  <Flex bg='#e3ffe3' flexDirection={"column"}>          {/*in flex it is in row through flexdirection we change the direction to column */}

  <Navbar/> 

  {/* <Input  marginLeft='50px' w='490px' variant='outline' placeholder='search the vegitables' onChange={(e) => setQuery(e.target.value)}/>  */}


  <SimpleGrid  templateColumns='repeat(4, 1fr)' gap={0} paddingLeft='200px' paddingRight='200px'paddingTop={'40px'}>


{(name).map((name,price) => {
  return (
  <Cards Name={name} Prize={price}/>
  )
  } )}




  
  </SimpleGrid >
  
 
    </Flex>//"100 vh"- vh is veiw height 
  )
                                              
  }

//export default Home