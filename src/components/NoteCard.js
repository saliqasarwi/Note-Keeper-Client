export default function NoteCard({note}){
    return(
        <div
        style={{
            backgroundColor:note.color||'#fff59d',
            padding:'12px',
            borderRadius:'4px',
            boxShadow:'0 1px 4px rgba(0,0,0,0.1)',
            minWidth:'200px',
            margin:'8px'
        }}
        >
             <h3 style={{fontSize:'16px',marginBottom:'4px'}}>{note.title}</h3>
             <p style={{fontSize:'14px',whiteSpace:'pre-wrap'}}>{note.content}</p>
        <small style={{display:'block',marginTop:'8px',color:'#5f6368',fontSize:'12px'}}>
          {new Date(note.createdAt).toLocaleDateString()}

        </small>
        </div>
    );
}