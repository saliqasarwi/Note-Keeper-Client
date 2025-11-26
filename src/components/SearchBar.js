export default function SearchBar({query,onChange}){
return (
<input 
type="text"
placeholder="Search notes..."
value={query}
onChange={onChange}
style={{
    margin:'40px',
    width:'80%',
    padding:'12px',
    marginBottom:'20px',    
    boederRadius:'24px',
    border:'1px solid #dadce0',
    boxShadow:'0 1px 6px rgba(182, 7, 158, 0.7)',
    fontSize:'16px'
}}

/>
);
}