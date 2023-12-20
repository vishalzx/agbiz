import React from "react";
import "./Component.css";
const Component=(props)=>{
    return(
        <>
            <div className="container">
                <div className="left">
                    <h2>{props.heading}</h2>
                    <p>{props.data}</p>
                </div>
                <div className="right">
                    <img src={props.img} alt="" />
                </div>
            </div>
        </>
    );
}
export default Component;