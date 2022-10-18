import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
    name: "note",
    initialState: {
        value: [
            { id: 1, noteHeader: "Note1", noteText: "note1note1note1" },
            { id: 2, noteHeader: "Note2", noteText: "note2note2note2" },
            { id: 3, noteHeader: "Note3", noteText: "note3note3note3" },
            { id: 4, noteHeader: "Note4", noteText: "note4note4note4" },
            { id: 5, noteHeader: "Note5", noteText: "note5note5note5" },
            { id: 6, noteHeader: "Note6", noteText: "note6note6note6" },
        ],
    },
    reducers: {

    }
})

export default noteSlice.reducer