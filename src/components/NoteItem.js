import React from "react";

const NoteItem = ({ note, deleteNote }) => (
  <div className="note-item">
    <h3>{note.title}</h3>
    <p>{note.content}</p>
    <p className="timestamp">
      Created: {new Date(note.timestamp).toLocaleString()}
    </p>
    <button
      onClick={() => deleteNote(note.id)}
      style={{
        padding: "8px 12px",
        backgroundColor: "#dc3545",
        color: "#fff",
        border: "none",
        borderRadius: "3px",
        cursor: "pointer",
        fontSize: "14px",
        transition: "background-color 0.3s ease",
      }}
    >
      Delete
    </button>
  </div>
);

export default NoteItem;
