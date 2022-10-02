import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <h1>NotesApp</h1>
      </div>

      <div>
        <form>
          <label>
            <input type="text" placeholder="Search..." />
          </label>
        </form>
      </div>

      <div className="text">
        <div>
          <form>
            <label>
              <input type="text" placeholder="Search..." />
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
