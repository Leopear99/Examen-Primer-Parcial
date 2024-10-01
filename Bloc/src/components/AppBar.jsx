import React from 'react';

const AppBar = () => {
  return (
    <div style={{
      backgroundColor: '#a2d5e0', // color pastel
      borderRadius: '8px',
      margin: '0px',
      padding: '20px',
      textAlign: 'center',
    }}>
      <h1 style={{ fontWeight: 'bold' }}>Título de la App</h1>
      <h2 style={{ fontWeight: 400 }}>Bienvenido a la aplicación de notas</h2>
    </div>
  );
};

export default AppBar;