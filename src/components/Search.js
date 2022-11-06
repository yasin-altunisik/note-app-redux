import React from "react";
import { useDispatch } from "react-redux";
import { addSearchText } from "../redux/note/noteSlice";

function Search() {
  const dispatch = useDispatch();

  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    dispatch(addSearchText(lowerCase));
  };
  return (
    <>
      <div className="ex1">
        <p>NotesApp</p>
      </div>

      <div id="input3">
        <form id="form1">
          <label>
            <input
              id="input1"
              type="text"
              placeholder="   Search..."
              onChange={inputHandler}
            />
          </label>
        </form>
      </div>
    </>
  );
}

export default Search;
