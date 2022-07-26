import { useState } from 'react';
import './App.css';
import NotesList from './NotesList/NotesList';


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


  
  return (
    <div className="App">
      <div className="container">
        <h1>React Notes App</h1>

        {/* <SearchBar /> */}
        
        <NotesList noteList={noteList} />
      </div>      
    </div>
  );
}

export default App;