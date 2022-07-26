import React from 'react'
import './Note.css'
export default function Note({note}) {
  return (
    <div className='note' key={note.id}>
      <div className="note-content">
        {note.text}
      </div>
      <div className="note-footer">
        <small>{note.date}</small>
        <button className='del'>&times;</button>
      </div>
    </div>
  )
}
