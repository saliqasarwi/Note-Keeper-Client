import "./App.css";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import NoteForm from "./components/NoteForm";
import NoteCard from "./components/NoteCard";
function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Learn react",
      content: "I have learn't  react",
      createdAt: new Date().toISOString(),
      color: "#ffab91",
    },
    {
      id: 2,
      title: "weather",
      content: "weather is cool",
      createdAt: new Date().toISOString(),
      color: "#fff59d",
    },
    {
      id: 3,
      title: "typescript",
      content: "I have to learn typescript next",
      createdAt: new Date().toISOString(),
      color: "#fff59d",
    },
  ]);
  const handleSubmit = (note) => {
    console.log("New note:", note);
    setIsExpanded(false);
  };
  const handleCancel = () => {
    setIsExpanded(false);
  };
  const handleUpdate=(id,updatedNote)=>{
setNotes(notes.map((n)=>(n.id===id?{...n,...updatedNote}:n)));
  }
  const handleDelete=(id)=>{
setNotes(notes.filter((n)=>n.id!==id));
  };
  return (
    <div className="App">
      <h1>My Note Keeper</h1>
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
          Take a note...
        </div>
      )}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))",
          gap: "16px",
        }}
      >
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} onUpdate={handleUpdate} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default App;
