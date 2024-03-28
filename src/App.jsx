import { useState } from "react";
import Hero from "./assets/components/hero"
import Navbar from "./assets/components/navbar"
import Ourclients from "./assets/components/ourclients";
import Community from "./assets/components/community";
import Blog from "./assets/components/blog";
import Pricing from "./assets/components/pricing";
import Getdemo from "./assets/components/get-demo";
import Footer from "./assets/components/footer";

export default function Home(){
  const [openMenu, setOpenMenu] = useState(false);

  return(
    <>
      <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu}/>
      <Hero openMenu={openMenu}/>
      <Ourclients />
      <Community />
      <Blog />
      <Pricing />
      <Getdemo />
      <Footer />
    </>
  )
}