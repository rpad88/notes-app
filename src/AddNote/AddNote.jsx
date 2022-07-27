import React, { useState } from 'react'
import './addNote.css'

export default function AddNote({handleAddNote}) {

  const [noteText, setNoteText] = useState('')

  function handleChange(e) {
    setNoteText(e.target.value)
  }

  function handleSave(e) {
    e.preventDefault()
    console.log("submit");
    if(noteText.trim().length > 0) handleAddNote(noteText)
    setNoteText('')
  }
    
  return (
    <div>
      <form action="" onSubmit={handleSave}>
        <input
          type="text"
          placeholder="Type to add a new note..."
          value={noteText}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
