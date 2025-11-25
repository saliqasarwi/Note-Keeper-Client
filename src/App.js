import './App.css';
import SearchBar from './components/SearchBar';
import { useState } from 'react';
import NoteForm from './components/NoteForm';
function App() {
  const [searchQuery,setSearchQuery]=useState('');
  const [isExpanded,setIsExpanded]=useState(false);
  const handleSubmit=(note)=>{
    console.log('New note:',note);
    setIsExpanded(false);
  };
  const handleCancel=()=>{
     setIsExpanded(false);
  };
  return (
    <div className="App">
     <h1>My Note Keeper</h1>
     <SearchBar query={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}/>
    {isExpanded?(
      <NoteForm onSubmit={handleSubmit} onCancel={handleCancel}/>
    ):
    (
      <div
      onClick={()=>setIsExpanded(true)}
      style={{
        backgroundColor:'white',
        padding:'16px',
        borderRadius:'8px',
        boxShadow:'0 1px 4px rgba(0,0,0,0.2)',
        marginBottom:'16px',
        cursor:'pointer',
        color:'#5f6368',
        fontSize:'16px'
      }}
      >Take a note...</div>
    )
    }
    
    </div>
  );
}

export default App;
