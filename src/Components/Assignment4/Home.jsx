import React from "react";
import "./Home.css";
import Component from "./Component";

const Home=()=>{
    const compo1={position:'relative', left:"-20px" }
    return(
        <>
        <div className="heading">
            <h1>Study India Vs Study Abroad</h1>
         </div>
         <div className="section">
            <Component className="compo" heading="Details" data1="Language" data2="Living Budget" data3="Connectivity" data4="VISA" data5="Transport" data6="University"/>
            <Component className="compo1" style={compo1} heading="Study India" data1="Language is no barrier" data2="Living on a budget" data3="Always connected with family and friends" data4="No visa problem" data5="Good public transport facility" data6="India boasts the largest university in the world"/>
            <Component className="compo2" heading="Study Abroad" data1="Language is barrier in many abroad countries" data2="High living costs as compared to India" data3="Connectivity with family is not as easy as in India" data4="Lots of hurdles while applying for VISA" data5="Not familiar with public transport" data6="No university is as large as IGNOU Abroad"/>
         </div>
        </>
    );
}

export default Home;