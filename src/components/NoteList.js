import React from "react";
import NoteItem from "./NoteItem";

const NoteList = ({ notes, deleteNote }) => (
  <div
    className="note-list"
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
      gap: "20px",
    }}
  >
    {notes.map((note) => (
      <NoteItem key={note.id} note={note} deleteNote={deleteNote} />
    ))}
  </div>
);

export default NoteList;
