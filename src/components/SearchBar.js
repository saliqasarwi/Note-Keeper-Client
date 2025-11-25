export default function SearchBar({query,onChange}){
return (
<input 
type="text"
placeholder="Search notes..."
value={query}
onChange={onChange}
style={{
    width:'100%',
    padding:'12px',
    marginBottom:'20px',
    boederRadius:'4px',
    border:'1px solid #ccc',
    fontSize:'16px'
}}

/>
);
}