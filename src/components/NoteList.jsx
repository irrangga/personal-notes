import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, onDelete, onArchive }) {
  if (notes.length === 0) {
    return (<div className="notes-list__empty-message">Tidak ada catatan</div>)
  }
  return (
    <div className="notes-list">
      {
        notes.map((note) => (
          <NoteItem note={note} key={note.id} onDelete={onDelete} {...note} onArchive={onArchive} {...note} />
        ))
      }
    </div>
  );
}

export default NoteList;
