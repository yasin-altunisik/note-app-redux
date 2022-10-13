import React from "react";

function Colors() {
    const data = [
        { id: 1, color: "lightblue" },
        { id: 2, color: "purple" },
        { id: 3, color: "pink" },
        { id: 4, color: "blue" },
        { id: 3, color: "orange" },
        { id: 3, color: "yellow" },
    ]

    return (
        <div id="colorsSpan">
            {data.map((color) => (
                <div className="colors" key={color.id} style={{ backgroundColor: color.color }}></div>
            ))}
        </div>
    )
}

export default Colors