import "./App.css";
import AddNote from "./components/AddNote";
import Notes from "./components/Notes";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <Search/>
      <AddNote/>
      <Notes />
    </div>
  );
}

export default App;
