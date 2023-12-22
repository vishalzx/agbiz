import React from "react";
import "./Component.css";

const Component=(props)=>{
    return(
        <div className="comp">
            <div className="logo">
                <span>{props.logo}</span>
            </div>
            <div className="content">
                <h4>{props.heading}</h4>
                <p>{props.para}</p>
            </div>
        </div>
    );
}

export default Component;