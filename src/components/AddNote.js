import React from "react";

function AddNote() {
    return (
        <div className="ex2">
            <div>
                <form>
                    <label>
                        <input id="input2" type="text" placeholder="   Enter your note here..." />
                    </label>
                </form>
            </div>

            <div id="div1">
                <div id="colorsSpan">
                    <div className="colors" id="color1"></div>
                    <div className="colors" id="color2"></div>
                    <div className="colors" id="color3"></div>
                    <div className="colors" id="color4"></div>
                </div>
                <button className="myButton">ADD</button>
            </div>
        </div>
    )
}

export default AddNote