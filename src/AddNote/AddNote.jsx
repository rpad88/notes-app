import React, { useState } from 'react'
import './addNote.css'

export default function AddNote({handleAddNote}) {

  const [noteText, setNoteText] = useState('')

  function handleSave(e) {
    e.preventDefault()
    //noteText.trim() -> remove espaços em branco, evitando de adicionar uma nota apenas com espaços
    if(noteText.trim().length > 0) handleAddNote(noteText)
    setNoteText('')
  }
    
  return (
    <div className='note new'>
      <form action="" onSubmit={handleSave}>
        <textarea
          type="text"
          placeholder="Type to add a new note..."
          rows={8}
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
