import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="ex1">
        <text>NotesApp</text>
      </div>

      <div>
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
          <span>
            <span className="colors" id="color1"></span>
            <span className="colors" id="color2"></span>
            <span className="colors" id="color3"></span>
            <span className="colors" id="color4"></span>
          </span>
          <span>button</span>
        </div>
      </div>

    </div>
  );
}

export default App;
