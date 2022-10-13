import React from "react";
import Colors from "./Colors";

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
                <Colors />
                <button className="myButton">ADD</button>
            </div>
        </div>
    )
}

export default AddNote