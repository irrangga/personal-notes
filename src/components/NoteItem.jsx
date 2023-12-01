import React from 'react';
import NoteItemContent from './NoteItemContent';
import NoteItemAction from './NoteItemAction';
import { showFormattedDate } from '../utils';

function NoteItem({ id, title, body, archived, createdAt, onDelete, onArchive, note }) {
  return (
    <div className="note-item">
      <NoteItemContent title={title} body={body} date={showFormattedDate(createdAt)} />
      <NoteItemAction id={id} archived={archived} onDelete={onDelete} onArchive={onArchive} note={note} />
    </div>
  );
}

export default NoteItem;
