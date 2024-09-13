import React, { useState } from "react";

function ColorDivs() {
    const [selectedDiv, setSelectedDiv] = useState(0);

    const handleDivClick = (index) => {
        setSelectedDiv(index);
    };

    return (
        <div>
            {Array.from({ length: 4 }, (_, index) => (
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
            ))}
        </div>
    );
}

export default ColorDivs;