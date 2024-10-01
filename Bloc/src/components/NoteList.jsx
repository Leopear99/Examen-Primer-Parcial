import React from 'react';
import { useNotes } from '../context/NoteContext';
import Note from './Note';

const NoteList = () => {
  const { state } = useNotes();

  return (
    <div style={{ padding: '20px' }}>
      {state.notes.map((note, index) => (
        <Note key={index} note={note} />
      ))}
    </div>
  );
};

export default NoteList;
