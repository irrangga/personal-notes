import React from 'react';
import NoteHeader from './NoteHeader';
import NoteBody from './NoteBody';

function NoteApp() {
  return (
    <div className="note-app">
      <NoteHeader />
      <NoteBody />
    </div>
  );
}

export default NoteApp;
