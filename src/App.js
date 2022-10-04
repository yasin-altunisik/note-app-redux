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
              <input type="text" placeholder="   Enter your note here..." />
            </label>
          </form>
        </div>

        <div>
          <span></span>
          <span></span>
        </div>
      </div>

    </div>
  );
}

export default App;
