import React, { useState, useEffect } from 'react';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import Pagination from './components/Pagination';
import SearchBar from './components/SearchBar';
import { getNotes, saveNotes } from '../src/components/ utils';
import './styles.css';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const savedNotes = getNotes();
    setNotes(savedNotes);
  }, []);

  const addNote = (newNote) => {
    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
    saveNotes(updatedNotes);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    saveNotes(updatedNotes);
  };

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
    setCurrentPage(0); // Reset pagination when searching
  };

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchTerm) ||
      note.content.toLowerCase().includes(searchTerm)
  );

  const pageCount = Math.ceil(filteredNotes.length / 10);

  const displayedNotes = filteredNotes.slice(
    currentPage * 10,
    currentPage * 10 + 10
  );

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="app">
      <h1>Simple Note Taking App</h1>
      <NoteForm addNote={addNote} />
      <SearchBar handleSearch={handleSearch} />
      <NoteList notes={displayedNotes} deleteNote={deleteNote} />
      <Pagination pageCount={pageCount} onPageChange={handlePageChange} />
    </div>
  );
};

export default App;