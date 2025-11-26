import "./App.css";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import NoteForm from "./components/NoteForm";
import NoteCard from "./components/NoteCard";
import useNotes from "./hooks/useNotes";
function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const {notes,loading,createNote,updateNote,deleteNote}=useNotes(searchQuery);
  const handleSubmit = (note) => {
    createNote(note);
    setIsExpanded(false);
  };
  const handleCancel = () => {
    setIsExpanded(false);
  };
 
  return (
    <div className="App">
      <h1 style={{
        background: 'linear-gradient(to right, #ff4081,rgb(178, 20, 184))', 
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        padding: '10px',
        borderRadius: '8px',
      }}>My Note Keeper</h1>
      <SearchBar
        query={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {isExpanded ? (
        <NoteForm onSubmit={handleSubmit} onCancel={handleCancel} />
      ) : (
        <div
          onClick={() => setIsExpanded(true)}
          style={{
            backgroundColor: "white",
            padding: "16px",
            borderRadius: "8px",
            boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
            marginBottom: "16px",
            cursor: "pointer",
            color: "#5f6368",
            fontSize: "16px",
          }}
        >
          Add a note...
        </div>
      )}
      {loading?(<p>Loading notes...</p>):(
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))",
          gap: "16px",
        }}
      >
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} onUpdate={updateNote} onDelete={deleteNote} />
        ))}
      </div>)}
    </div>
  );
}

export default App;
