const useTree=()=>{
    function  insertNode(tree,folderId,item,isFolder){
       if(tree.id === folderId && tree.isFolder){
         tree.items.unshift({
           id:new Date().getTime(),
           name:item,
           isFolder,
           items:[]
         })
       }
       let latestNode=[];
       latestNode=tree.items.map((e)=>{
         return insertNode(e,folderId,item,isFolder);
       });
       return {...tree,items:latestNode};
    }
    return {insertNode};
  };
  
  export default useTree;