import React from "react";
import Colors from "./Colors";
import { addNote } from "../redux//note/noteSlice"
import { useDispatch } from "react-redux"
import { useState } from "react";

function AddNote() {
    const [addedNote, setAddedNote] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addNote(addedNote))
    }

    return (
        <div className="ex2">
            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                        <input id="input2" type="text" value={addedNote} onChange={(e) => setAddedNote(e.target.value)} placeholder="   Enter your note here..." />
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