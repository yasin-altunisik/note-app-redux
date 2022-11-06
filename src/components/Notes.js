import React from "react";
import { useSelector } from "react-redux";

function Notes() {
  const notes = useSelector((state) => state.note.value);
  const searchBoxText = useSelector((state) => state.note.searchText);

  const filteredNotes = notes.filter((el) => {
    if (searchBoxText === "") {
      return el;
    } else {
      return el.noteText.toLowerCase().includes(searchBoxText);
    }
  });

  return (
    <div className="notesDiv">
      {filteredNotes.map((note) => (
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
