import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="ex1">
        <text>NotesApp</text>
      </div>

      <div id="input3">
        <form id="form1">
          <label>
            <input id="input1" type="text" placeholder="   Search..." />
          </label>
        </form>
      </div>

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
      <div className="notesDiv">
        <div className="notes">
          note 1
        </div>
        <div className="notes">
          note 2
        </div>
        <div className="notes">
          note 3
        </div>
        <div className="notes">
          note 4
        </div>
      </div>

    </div>
  );
}

export default App;
