import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
// import { saveNotes } from './ utils';
// import '../Styles/NoteForm.css'

const NoteForm = ({ addNote }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      id: uuidv4(),
      title,
      content,
      timestamp: new Date().toISOString(),
    };
    addNote(newNote);
    setTitle("");
    setContent("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        maxwidth: "400px",
        margin: "0 auto",
      }}
    >
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={{
          margin: "2em",
          height: "35px",
          padding: "10px",
          marginBottom: "10px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          resize: "none",
        }}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        style={{
          margin: "2em",
          height: "65px",
          padding: "10px",
          marginBottom: "10px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          resize: "none",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
          margin: "30px"
        }}
      >
        Add Note
      </button>
    </form>
  );
};

export default NoteForm;
