import React, { useEffect} from 'react'
import EditorJS from '@editorjs/editorjs';

export default function Saved(props) {
  const {data} = props;
    const showSaved = ()=>{
      let editor = new EditorJS({
        holderId : 'loadHere',
        autofocus: true,
        data: props.data
    }); 
    }
   
    useEffect(()=>{
      console.log(props.data);
        showSaved();
    })
        
  return (
      <>
    <div id="loadHere"></div>
      </>
    
  )
}
