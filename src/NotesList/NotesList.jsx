import React from 'react'
import Note from '../Note'
import "./NotesList.css"

export default function NotesList({noteList}) {
  return (
    <div className='notes-list'>
      {noteList.map(note => 
        <Note note={note} />
      )}
    </div>
  )
}
