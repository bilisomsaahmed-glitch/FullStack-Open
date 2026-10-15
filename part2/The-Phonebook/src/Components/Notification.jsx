const errorStyle={
    backgroundColor:'#DAE1E3',
    color:'red',
    border:'2px solid red'
}

const successStyle={
     backgroundColor:'#DAE1E3',
    color:'green',
    border:'2px solid green'
}
function Notification({message,status}) {
    if(message===null){
        return null;
    }

    return(
        <div style={status?successStyle:errorStyle}>
              {message}
        </div>
    )
    
}
export default Notification