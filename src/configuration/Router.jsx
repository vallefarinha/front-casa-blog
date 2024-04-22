import { Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import WhatWeDo from "../pages/WhatWeDo";
import OurHistory from "../pages/OurHistory";
import OurHouse from "../pages/OurHouse";
import Petra from "../pages/Petra";
import News from "../pages/News";
import Blog from "../pages/Blog";
import Admin from "../pages/Admin";
import BecameAPartner from "../pages/BecameAPartner";
import PartnerForm from "../pages/PartnerForm";
import ThanksForSignIn from "../pages/ThanksForSignIn";
import SanJose from "../pages/SanJose";
import Login from "../pages/Login";
import Post from "../pages/Post";


export default function Router() {
    return (
      <Routes>
          <Route path="/" element={<Home/>}></Route> 
          <Route path="/about" element={<AboutUs/>}></Route> 
          <Route path="/work" element={<WhatWeDo/>}></Route> 
          <Route path="/history" element={<OurHistory/>}></Route> 
          <Route path="/house" element={<OurHouse/>}></Route> 
          <Route path="/petra" element={<Petra/>}></Route> 
          <Route path="/sanjose" element={<SanJose/>}></Route> 
          <Route path="/news" element={<News/>}></Route> 
          <Route path="/blog" element={<Blog/>}></Route> 
          <Route path="/login" element={<Login/>}></Route> 
          <Route path="/post" element={<Post/>}></Route> 
          <Route path="/partnership" element={<BecameAPartner/>}></Route> 
          <Route path="/form" element={<PartnerForm/>}></Route> 
          <Route path="/admin" element={<Admin/>}></Route> 
          <Route path="/thanks" element={<ThanksForSignIn/>}></Route>
      </Routes>
    )
  }