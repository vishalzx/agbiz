import React from 'react';
import "./Home.css";
import Component from "./Component"

import apic from "../../Pictures/pic1.png";
import bpic from "../../Pictures/pic2.png";
import cpic from "../../Pictures/pic3.png";
import dpic from "../../Pictures/pic4.png";
import epic from "../../Pictures/pic5.png";
import fpic from "../../Pictures/pic6.png";

const Home=()=>{
    return(
        <>
    <div className="main">
      <h1 style={{textAlign:"center", color:"white"}}>Highlights about India</h1>
      <hr style={{height:"4px", color:"grey", width:"95%", margin:"auto", marginTop:"20px"}}/>
      <div className="comp">
      <Component heading="Name" img={apic} data="Republic of India"/>
      <Component heading="Capital" img={bpic} data="Delhi"/>
      <Component heading="Language" img={cpic} data="Hindi, English, and many regional language"/>
      <Component heading="Religion" img={dpic} data="Hinduism, Islam, Christianity, Others"/>
      <Component heading="Population" img={epic} data="136.64 Crores (2019)"/>
      <Component heading="Currency" img={fpic} data="Indian Rupee (INR)"/>
      </div>
    </div>
        </>
    );
}

export default Home;