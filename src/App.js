import './App.css';
import SearchBar from './components/SearchBar';
import { useState } from 'react';
function App() {
  const [searchQuery,setSearchQuery]=useState('');
  return (
    <div className="App">
     <h1>My Note Keeper</h1>
     <SearchBar query={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}/>
    </div>
  );
}

export default App;
