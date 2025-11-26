import { useState, useEffect } from 'react';

const API_BASE = 'http://localhost:5000/api/notes';

function useNotes(searchQuery) {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNotes = async () => {
    setLoading(true);
    try {
      const url = searchQuery ? `${API_BASE}/search?query=${encodeURIComponent(searchQuery)}` : API_BASE;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch notes: ${response.status}`);
      }
      const data = await response.json();
      setNotes(data.data || []); // Extract array from data.data
    } catch (error) {
      console.error('Error fetching notes:', error);
      alert('Error fetching notes: ' + error.message);
      setNotes([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, [searchQuery]);

  const createNote = async (note) => {
    try {
      const response = await fetch(API_BASE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(note),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create note');
      }
      fetchNotes();
    } catch (error) {
      console.error('Error creating note:', error);
      alert('Error creating note: ' + error.message);
    }
  };

  const updateNote = async (id, updatedNote) => {
    try {
      const response = await fetch(`${API_BASE}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedNote),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to update note');
      }
      fetchNotes();
    } catch (error) {
      console.error('Error updating note:', error);
      alert('Error updating note: ' + error.message);
    }
  };

  const deleteNote = async (id) => {
    try {
      const response = await fetch(`${API_BASE}/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to delete note');
      }
      fetchNotes();
    } catch (error) {
      console.error('Error deleting note:', error);
      alert('Error deleting note: ' + error.message);
    }
  };

  return { notes, loading, createNote, updateNote, deleteNote };
}

export default useNotes;