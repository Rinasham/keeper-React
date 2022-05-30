import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

import { useState } from "react";

function App() {
  const [noteArr, setNoteArr] = useState([]);
  return (
    <div className="App">
      <Header />
      <CreateArea setNoteArr={setNoteArr} />
      {noteArr.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
