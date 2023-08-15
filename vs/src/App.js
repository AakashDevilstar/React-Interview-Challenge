import { useState } from "react";
import Folder from "./components/Folder";
import useTree from './hooks/use-tree-traverse'
import data from './data/folderData';
import "./styles.css";

export default function App() {
  const [folderdata,setfolderdata]=useState(data);

  
  const {insertNode}=useTree();
  const handleInsertNode=(folderId,item,isFolder)=>{
    const finaltree=insertNode(folderdata,folderId,item,isFolder);
    setfolderdata(finaltree);
  }
  return (
    <div className="App">
      <Folder handleInsertNode={handleInsertNode} explorer={folderdata}/>
    </div>
  );
}
