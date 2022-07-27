import React, { useState } from 'react';
import './App.css';
import NotesList from './NotesList';
import Search from './Search';


function App() {

  const [noteList, setNoteList] = useState([
    {
      id: 1,
      text: "My first note",
      date: new Date().toLocaleDateString()
    },
    {
      id: 2,
      text: "second note",
      date: new Date().toLocaleDateString()
    },
    {
      id: 3,
      text: "third note",
      date: new Date().toLocaleDateString()
    },
  ])
  
  const [searchText, setSearchText] = useState('')
  const [id, setId] = useState(1)
  
  const incrementId = () => setId(id + 1)

  function addNote(text) {
    console.log("function addNote()");
    let newNote = {
      id: id,
      text: text,
      date: new Date().toLocaleDateString()
    }
    let newNotes = [...noteList, newNote]
    setNoteList(newNotes)
    incrementId()
  }
  
  return (
    <div className="App">
      <div className="container">
        <h1>React Notes App</h1>

        <Search searchText={searchText} setSearchText={setSearchText}/>
        <br />
        <NotesList 
          noteList={noteList.filter(note => 
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
        />
      </div>      
    </div>
  );
}

export default App;