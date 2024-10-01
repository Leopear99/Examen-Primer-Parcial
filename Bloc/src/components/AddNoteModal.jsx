import React, { useState } from 'react';
import { useNotes } from '../context/NoteContext';

const AddNoteModal = ({ isOpen, onClose }) => {
  const { dispatch } = useNotes();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSave = () => {
    dispatch({ type: 'ADD_NOTE', payload: { title, content } });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{
        background: '#fff',
        padding: '20px',
        borderRadius: '8px',
      }}>
        <h3>Añadir Nota</h3>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título"
          style={{ width: '100%', marginBottom: '10px' }}
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Contenido"
          style={{ width: '100%', marginBottom: '10px' }}
        />
        <button onClick={handleSave}>Guardar</button>
        <button onClick={onClose}>Cancelar</button>
      </div>
    </div>
  );
};

export default AddNoteModal;
