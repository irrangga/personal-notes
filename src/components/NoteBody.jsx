import React from 'react';
import NoteInput from './NoteInput';
import NoteList from './NoteList';
import { getInitialData } from '../utils/index'

class NoteBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: {
        activeNotes: getInitialData(),
        archivedNotes: []
      }
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
  }

  onDeleteHandler(id) {
    console.log(id)

    const notes = {
      activeNotes: this.state.notes.activeNotes.filter(note => note.id !== id),
      archivedNotes: this.state.notes.archivedNotes.filter(note => note.id !== id)
    }
    this.setState({ notes });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: {
          activeNotes: [
            ...prevState.notes.activeNotes,
            {
              id: +new Date(),
              title,
              body,
              createdAt: Date.now()
            }
          ],
          archivedNotes: []

        }
      }
    });
  }

  onArchiveNoteHandler({ id, archived, note }) {
    let activeNotes = this.state.notes.activeNotes
    let archivedNotes = this.state.notes.archivedNotes

    let notes = {
      activeNotes: activeNotes,
      archivedNotes: archivedNotes
    }

    if (archived) {
      note.archived = false

      notes = {
        activeNotes: [...activeNotes, note],
        archivedNotes: archivedNotes.filter(note => { return note.id !== id }),
      }
    } else {
      note.archived = true

      notes = {
        activeNotes: activeNotes.filter(note => { return note.id !== id }),
        archivedNotes: [...archivedNotes, note],
      }
    }

    this.setState({ notes })
  }

  render() {
    return (
      <div className="note-app__body">
        <NoteInput addNote={this.onAddNoteHandler} />

        <h2>Catatan Aktif</h2>
        <NoteList notes={this.state.notes.activeNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveNoteHandler} />

        <h2>Arsip</h2>
        <NoteList notes={this.state.notes.archivedNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveNoteHandler} />
      </div>
    );
  }
}

export default NoteBody;
