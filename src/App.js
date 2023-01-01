import './App.css';
import {Home} from "./pages/Home"
// import Login from "./pages/Login";
import Test from "./pages/test"
//import Navbar from './components/Navbar/Navbar';  // for remoting
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (

    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Home/>} />
      <Route path="/test" element={<Test/>}/>
      {/* <Route path="/login" element={<Login />} /> */}
    <Route path="*" element={<h1>404 Not Found</h1>} />
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
