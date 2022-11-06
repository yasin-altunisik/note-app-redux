import React from "react";

import { useSelector } from "react-redux";

function Notes() {
  const textOfNote = useSelector((state) => state.note.value);

  return (
    <div className="notesDiv">
      {textOfNote.map((note) => (
        <div
          className="notes"
          key={note.id}
          style={{ backgroundColor: note.noteCardColour }}
        >
          <div>{note.noteText}</div>
        </div>
      ))}
    </div>
  );
}

export default Notes;
