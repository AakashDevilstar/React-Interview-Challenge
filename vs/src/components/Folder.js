import { useState } from "react";
import "../styles.css"

function Folder({explorer, handleInsertNode}){
  console.log(explorer);
  const[expand,setexpand]=useState(false);
  const [showInput,setshowInput]=useState({
    visible:false,
    isFolder:false,
  });

  const onAddFolder=(e)=>{
    if(e.keyCode === 13 && e.target.value){
      handleInsertNode(explorer.id,e.target.value,showInput.isFolder);
      setshowInput({...showInput,visible:false});
    }
  }

  const handleNewFolder=(e,isFolder)=>{
    e.stopPropagation();
    setexpand(true);
    setshowInput({
      visible:true,
      isFolder
    })
  };
  
  if(explorer.isFolder){
    return(
      <div style={{marginTop:5}}>
        <div className='folder' onClick={()=>setexpand(!expand)} style={{cursor:'pointer'}}>
          <span>📁{explorer.name}</span> 
          <div>
            <button onClick={(e)=> handleNewFolder(e,true)}>Folder +</button>
            <button onClick={(e)=>handleNewFolder(e,false)}>File +</button>
          </div>
        </div>
        <div style={{display:expand?"block":"none",paddingLeft:30,cursor:"pointer"}}>
          {
            showInput.visible && (
              <div className='inputContainer'>
                <span>{showInput.isFolder?"📁":"📄"}</span>
                <input 
                   type='text'
                   onKeyDown={onAddFolder}
                   onBlur={()=>setshowInput({...showInput,visible:false})}
                   className='inputContainer__input' 
                   autoFocus 
                />
              </div>
            )
          }
          {explorer.items.map((e)=>{
            return(
              <Folder handleInsertNode={handleInsertNode} explorer={e} key={e.id} />
            )
          })}
        </div>
      </div>
    );
  } else{
    return <span className='file'>📄{explorer.name}</span>
  }
}

export default Folder;