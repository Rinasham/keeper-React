import React, { useState } from "react";
import Note from "./Note";
import Button from "./Button";

function CreateArea({ setNoteArr }) {
  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
  });

  function inputNote(e) {
    const { name, value } = e.target;
    setNewNote((prevVal) => {
      return {
        ...prevVal,
        [name]: value,
      };
    });
  }

  function addNote(e) {
    setNoteArr((prevArr) => {
      return [...prevArr, newNote];
    });
    setNewNote({
      title: "",
      content: "",
    });
    e.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={inputNote}
          value={newNote.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={inputNote}
          value={newNote.content}
        />
        <Button addNote={addNote} />
      </form>
    </div>
  );
}

export default CreateArea;
