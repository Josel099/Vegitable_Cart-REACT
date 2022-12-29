import './App.css';
import {Home} from "./pages/Home"
import Login from "./pages/Login";
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (

    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Home/>} />
      <Route path="/navbar" element={<Navbar/>}/>
      <Route path="/login" element={<Login />} />
    <Route path="*" element={<h1>404 Not Found</h1>} />
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
