import React from "react";
import "./Component.css";

const Component=(props,{style})=>{
    return(
        <>
            <div className="box" style={{borderTopLeftRadius:"4px",borderBottomLeftRadius:"4px", boxShadow:"-2px 2px 10px black"}}>
                <h2>{props.heading}</h2>
                <hr />
                <h4>{props.data1}</h4>
                <hr />
                <h4>{props.data2}</h4>
                <hr />
                <h4>{props.data3}</h4>
                <hr />
                <h4>{props.data4}</h4>
                <hr />
                <h4>{props.data5}</h4>
                <hr />
                <h4>{props.data6}</h4>
            </div>
        </>
    );
}

export default Component;