import React, { useEffect, useState} from 'react'
import EditorJS from '@editorjs/editorjs';
import EditorConfig  from './editorConfig';
import "./editor.css";
import Saved from "./Saved";

export default function Editor() {
  const [Data, setData] = useState(null);
    let editor;
    const launchEditor = ()=>{
        editor = new EditorJS(EditorConfig()); 
    }
    const saveData = ()=>{
        editor.save().then((outputData) => {
            console.log(outputData)
            setData(outputData);
          }).catch((error) => {
            console.log('Saving failed: ', error)
          });
    }
    useEffect(()=>{
        launchEditor()
    })
  return (
      <>
      {/* Editor Component  */}
      <h1>Editor : powered by Editor.js</h1>
    <div id='editorjs'></div>
    <button onClick={saveData}>Save Text</button>

    {/* Editor Component  */}
    <h1>Rendered data from objects</h1>
    <Saved data = {Data}/>
      </>
    
  )
}
