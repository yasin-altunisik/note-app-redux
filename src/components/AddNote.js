import React from "react";
import Colors from "./Colors";
import { addNote } from "../redux//note/noteSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

function AddNote() {
  const [addedNote, setAddedNote] = useState("");
  const dispatch = useDispatch();
  let checkedNoteColor = "";

  const handleSubmit = (event) => {
    event.preventDefault();
    if (addedNote === "") {
      alert("Please add note!");
      return;
    }
    let actionSender = [];
    actionSender[0] = addedNote;
    actionSender[1] = checkedNoteColor;
    dispatch(addNote(actionSender));
    setAddedNote("");
  };

  const noteColor = (color) => {
    checkedNoteColor = color;
  };

  return (
    <div className="ex2">
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              id="input2"
              type="text"
              value={addedNote}
              onChange={(e) => setAddedNote(e.target.value)}
              placeholder="   Enter your note here..."
            />
          </label>
        </form>
      </div>

      <div id="div1">
        <Colors noteColor={noteColor} />
        <button className="myButton" onClick={handleSubmit}>
          ADD
        </button>
      </div>
    </div>
  );
}

export default AddNote;
