import React from 'react';

const Collection = ({ notes }) => {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    }}>
      {notes.map((note, index) => (
        <Note key={index} note={note} />
      ))}
    </div>
  );
};

export default Collection;
