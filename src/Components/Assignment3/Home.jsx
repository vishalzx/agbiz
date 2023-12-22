import React from "react";
import "./Home.css";
import Component from "./Component";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import EngineeringIcon from '@mui/icons-material/Engineering'; 
import ComputerIcon from '@mui/icons-material/Computer';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';

const Home=()=>{
    return(
        <div className="mainDiv">
            <h1>Career Scopes for Students</h1>
            <p>There are lots of career scopes for students who completed their degrees in India. Students can choose any of the courses from different programs in management, engineering, medical, etc. We have mentioned below the scope for students after completing the degeree in India from popular colleges of the country.</p>
            <div className="components">
                <Component logo={<ManageAccountsIcon/>} heading="Management" para="Supervisor/ Front-line manager/ Senior Manager/ Board of Director/ CEO/ President of the Organization"/>
                <Component logo={<EngineeringIcon/>} heading="Engineering" para="Students can start working to build a better future and can apply for ME/ M.Tech./ M.S."/>
                <Component logo={<ComputerIcon/>} heading="Computer Science" para="Software Developer, Engineers, and Programmers"/>
                <Component logo={<MedicalServicesIcon/>} heading="Medical" para=" Medical specialist, Open personal clinic, join major hospitals and private"/>
            </div>
        </div>
    );
}
export default Home;