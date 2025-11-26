export default function DeleteDialog({onConfirm,onCancel}){
    return(
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
        onClick={onCancel}
        >
            <div
            onClick={(e)=>e.stopPropagation()}
            style={{
                backgroundColor:'white',
                padding:'20px',
                borderRadius:'8px0',
                width:'80%',
                maxWidth:'400px',
                boxShadow:'0 4px 8px rgba(0,0,0,0.2)',
                textAlign:'center'
            }}
            >
                    <h3 style={{fontSize:'18px',marginBottom:'12px'
                    }}>Note Deletion</h3>
                    <p style={{fontSize:'16px',marginBottom:'20px'
                    }}>Are you sure you want to delete this note?</p>
                    <button
                    onClick={onCancel}
                    style={{
                        background:'none',
                        border:'none',
                        color:'#5f6368',
                        padding:'8px 16px',
                        cursor:'pointer',
                        marginRight:'8px'
                    }}
                    >Close</button>
                    <button
                    onClick={onConfirm}
                    style={{
                        backgroundColor:'#d93025',
                        color:'white',
                        border:'none',
                        borderRadius:'4px',
                        padding:'8px 16px',
                        cursor:'pointer'
                    }}
                    >Delete</button>
            </div>


        </div>
    );
}