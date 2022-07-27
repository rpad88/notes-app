import React from 'react'
import AddNote from '../AddNote'
import Note from '../Note'
import "./NotesList.css"

export default function NotesList({noteList, handleAddNote, handleDelete}) {
  return (
    <div className="notes-list">
      {noteList.map((note) => (
        <Note
          id={note.id}
          text={note.text}
          date={note.date}
          handleDelete={handleDelete}
        />
      ))}

      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
}
