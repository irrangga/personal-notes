import React from 'react';

function NoteItemAction({ note, id, archived, onDelete, onArchive }) {
  const word = archived ? 'Pindahkan' : 'Arsipkan'

  return (
    <div className="note-item__action">
      <button className="note-item__delete-button" onClick={() => onDelete(id)}>Delete</button>
      <button className="note-item__archive-button" onClick={() => onArchive({ id, archived, note })}>{word}</button>
    </div>
  );
}

export default NoteItemAction;
