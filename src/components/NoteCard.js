import {useState} from 'react';
import NoteForm from './NoteForm';
import DeleteDialog from './DeleteDialog';
export default function NoteCard({note,onUpdate,onDelete}){
    const [showEdit,setShowEdit]=useState(false);
    const [showDelete,setShowDelete]=useState(false);
    const [isHovered,setIsHovered]=useState(false);
    const handleUpdate=(updatedNote)=>{
        onUpdate(note.id,updatedNote);
        setShowEdit(false);
    }
    const handleDelete=()=>{
        onDelete(note.id);
        setShowDelete(false);
    }
    return(
  <>
        <div onClick={()=>setShowEdit(true)}
        onMouseEnter={()=>setIsHovered(true)}
        onMouseLeave={(()=>setIsHovered(false))}
        style={{
            position:'relative',
            backgroundColor:note.color||'#fff59d',
            padding:'12px',
            borderRadius:'4px',
            boxShadow:'0 1px 4px rgba(0,0,0,0.1)',
            minWidth:'200px',
            margin:'8px',
            cursor:'pointer'
        }}
        >
             <h3 style={{fontSize:'16px',marginBottom:'4px'}}>{note.title}</h3>
             <p style={{fontSize:'14px',whiteSpace:'pre-wrap'}}>{note.content}</p>
        <small style={{display:'block',marginTop:'8px',color:'#5f6368',fontSize:'12px'}}>
          {new Date(note.createdAt).toLocaleDateString()}

        </small>
        {isHovered&&
        (
            <button
            onClick={(e)=>{
                e.stopPropagation();
                setShowDelete(true);
            }}
            style={{
                position:'absolute',
                bottom:'0px',
                right:'0px',
                background:'none',
                border:'none',
                cursor:'pointer',
                fontSize:'18px',
                color:'#5f6368'
            }}
            >
                delete
            </button>
        )
        }
        </div>
        {
            showEdit&&(
                <div
                style={{
                    position:'fixed',
                    top:0,
                    left:0,
                    right:0,
                    bottom:0,
                    backgroundColor:'rgba(0,0,0,0.5)',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    zIndex:1000
                }}
                onClick={()=>setShowEdit(false)}
                >
               <div onClick={(e)=>e.stopPropagation()}
                style={{
                    backgroundColor:'white',
                    padding:'20px',
                    borderRadius:'8px',
                    width:'80%',
                    maxWidth:'500px',
                    boxShadow:'0 4px 8px rgba(0,0,0,0.2)'
                }}
                >
                    <NoteForm
                    initialNote={note}
                    onSubmit={handleUpdate}
                    onCancel={()=>setShowEdit(false)}
                    isEdit={true}
/>

               </div>

                </div>
            )
        }
        {
            showDelete&&(
                <DeleteDialog
                onConfirm={handleDelete}
                onCancel={()=>setShowDelete(false)}
                />
            )
        }
  </>
    );
}