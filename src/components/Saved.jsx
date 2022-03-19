import React, { useEffect} from 'react'
import EditorJS from '@editorjs/editorjs';

// Config
import Header from "@editorjs/header";

export default function Saved(props) {
  let editor;
    const showSaved = ()=>{
      editor = new EditorJS({
        holderId : 'loadHere',
        autofocus: true,
        data: props.data,
        tools:{
          header : Header
        }
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
