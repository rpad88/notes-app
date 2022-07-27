import React from 'react'
import AddNote from '../AddNote'
import Note from '../Note'
import "./NotesList.css"

export default function NotesList({noteList, handleAddNote}) {
  return (
    <div className="notes-list">
      {noteList.map((note) => (
        <Note key={note.id} text={note.text} date={note.date} />
      ))}

      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
}
