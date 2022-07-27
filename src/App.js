import React, { useState } from 'react';
import './App.css';
import NotesList from './NotesList';
import Search from './Search';


function App() {

  const [noteList, setNoteList] = useState([])
  
  // Texto a ser pesquisado
  const [searchText, setSearchText] = useState('')
  
  // Função que aumenta o ID em + 1
  const [id, setId] = useState(1)
  function incrementId() {
    return setId(id + 1)
  }

  // Adiciona uma nova nota em Note.jsx
  function addNote(text) {
    console.log("function addNote()");
    let newNote = {
      id: id,
      text: text,
      date: new Date().toLocaleDateString()
    }
    // cria um novo array recebendo o antigo array + a nova nota
    let newNotes = [...noteList, newNote]
    setNoteList(newNotes)
    incrementId()
  }

  function deleteNote(id) {
    console.log('deletando o id: ' +id);
    let newNotes = noteList.filter(note => note.id !== id)
    setNoteList(newNotes)
  }
  
  return (
    <div className="App">
      <div className="container">
        <h1>React Notes App</h1>
        
        <Search searchText={searchText} setSearchText={setSearchText}/>
        <br />
        <NotesList 
        // recebe um texto para pesquisa | Está SEMPRE pesquisando uma string vazia
          noteList={noteList.filter(note => 
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDelete={deleteNote}
        />
      </div>      
    </div>
  );
}

export default App;