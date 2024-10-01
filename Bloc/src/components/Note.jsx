import React from 'react';

const Note = ({ note }) => {
  return (
    <div style={{
      backgroundColor: '#b4e1e5', // color pastel
      borderRadius: '8px',
      padding: '20px',
      marginBottom: '10px',
      boxShadow: '0px 4px 8px rgba(0,0,0,0.1)',
    }}>
      <h3 style={{ fontWeight: 500 }}>{note.title}</h3>
      <p>{note.content}</p>
    </div>
  );
};

export default Note;
