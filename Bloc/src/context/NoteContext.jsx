import React, { createContext, useReducer } from 'react';

const NoteContext = createContext();

const initialState = {
  notes: [],
};

const noteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return { ...state, notes: [...state.notes, action.payload] };
    // Agregar más casos para editar, eliminar, etc.
    default:
      return state;
  }
};

export const NoteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(noteReducer, initialState);

  return (
    <NoteContext.Provider value={{ state, dispatch }}>
      {children}
    </NoteContext.Provider>
  );
};

export const useNotes = () => useContext(NoteContext);
