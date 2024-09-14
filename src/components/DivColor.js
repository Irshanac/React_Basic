import React, { useState } from "react";

function ColorDivs() {
    const [selectedDiv, setSelectedDiv] = useState(0);
    const [color,setColor]="pink"

    const handleDivClick = (index) => {
        setSelectedDiv(index);
    };
    const s={
        backgroundColor:color,
        height:"150px",
        width:"100px"
    }
    const chnage=(index)=>{
        setSelectedDiv(index)
        setColor((p)=>(p=="pink"?"green":"pink"))
    }
    return (
        <div>
            {/* {Array.from({ length: 4 }, (_, index) => (
                <div
                    onClick={() => handleDivClick(index)}
                    style={{
                        width: "100px",
                        height: "100px",
                        backgroundColor: selectedDiv === index ? "pink" : "green",
                        cursor: "pointer",
                        border: "1px solid black",
                    }}
                ></div>
            ))} */}
            <div style={s} onClick={chnage(1)}></div>
            <div style={s} onClick={chnage(2)}></div>
            <div style={s} onClick={chnage(3)}></div>
            <div style={s} onClick={chnage(4)}></div>
        </div>
    );
}

export default ColorDivs;