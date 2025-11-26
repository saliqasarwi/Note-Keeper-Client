import {useState} from 'react';
export default function NoteForm({onSubmit,onCancel,initialNote={title:'',content:''},isEdit=false
}){
const [title,setTitle]=useState(initialNote.title||'');
const [content,setContent]=useState(initialNote.content||'');
const handleSubmit=()=>{
    if(title.trim()||content.trim()){
        onSubmit({title:title.trim(),content:content.trim()});
    }
    if(!isEdit){
    setTitle('');
    setContent('');
    }
    
};
const handleCancel=()=>{
    if(!isEdit){
        setTitle('');
        setContent('');
        }    
    onCancel();
};
return(
<div
style={{
backgroundColor:'white',
padding:'16px',
borderRadius:'8px',
boxShadow:'0 1px 4px rgba(0,0,0,0.2)',
marginBottom:'16px'
}}>
<input 
type="text"
placeholder="Title"
value={title}
onChange={(e)=>setTitle(e.target.value)}
style={{
    width:'100%',
    border:'none',
    outline:'none',
    fontSize:'18px',
    marginBottom:'8px'
}}
/>
<textarea
placeholder='Write a note...'
value={content}
onChange={(e)=>setContent(e.target.value)}
style={{
    width:'100%',
    border:'none',
    outline:'none',
    fontSize:'16px',
    resize:'none',
    minHeight:'60px'
}}
/>
<div
style={{
    textAlign:'right',
    marginTop:'12px'
}}
>
<button 
onClick={handleCancel}
style={{
    background:'none',
    border:'none',
    color:'#5f6368',
    padding:'8px 16px',
    cursor:'pointer',
    marginRight:'8px',
}}
>
    Cancel
</button>
<button>
<button
onClick={handleSubmit}
style={{
    color:'white',
    border:'none',
    borderRadius:'4px',
    padding:'8px 16px',
    cursor:'pointer'
}}
>
    Save
</button>

</button>
</div>
</div>

);
}