import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
  name: "note",
  initialState: {
    value: [
      { id: 1, noteText: "note1note1note1", noteCardColour: "lightblue" },
      { id: 2, noteText: "note2note2note2", noteCardColour: "purple" },
      { id: 3, noteText: "note3note3note3", noteCardColour: "pink" },
      { id: 4, noteText: "note4note4note4", noteCardColour: "blue" },
      { id: 5, noteText: "note5note5note5", noteCardColour: "orange" },
      { id: 6, noteText: "note6note6note6", noteCardColour: "yellow" },
    ],
    searchText: "",
  },
  reducers: {
    addNote: (state, action) => {
      state.value.push({
        id: state.value.length + 1,
        noteText: action.payload[0],
        noteCardColour: action.payload[1],
      });
    },
    addSearchText: (state, action) => {
      state.searchText = action.payload;
    },
  },
});

export const { addNote, addSearchText } = noteSlice.actions;
export default noteSlice.reducer;
