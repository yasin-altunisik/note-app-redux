import React from "react";
import Colors from "./Colors";

import {addNote} from "../redux//note/noteSlice"
import {useDispatch} from "react-redux"

function AddNote() {
    const dispatch = useDispatch();
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