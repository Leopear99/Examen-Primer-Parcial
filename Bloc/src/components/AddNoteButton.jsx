import React from 'react';

const AddNoteButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        margin: '20px',
        borderRadius: '50%',
        backgroundColor: '#f2a900', // color pastel
        color: '#fff',
        border: 'none',
        padding: '10px 20px',
        cursor: 'pointer',
      }}>
      Agregar Nota
    </button>
  );
};

export default AddNoteButton;
