import React from 'react';
import { NoteProvider } from './context/NoteContext';
import AppBar from './components/AppBar';
import NoteList from './components/NoteList';
import AddNoteButton from './components/AddNoteButton';
import AddNoteModal from './components/AddNoteModal';

const App = () => {
  const [isModalOpen, setModalOpen] = React.useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <NoteProvider>
      <div style={{ fontFamily: 'Noto Sans', backgroundColor: '#f7f7f7' }}>
        <AppBar />
        <AddNoteButton onClick={handleOpenModal} />
        <NoteList />
        <AddNoteModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </NoteProvider>
  );
};

export default App;