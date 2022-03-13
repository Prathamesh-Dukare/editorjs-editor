import React from 'react'
import EditorJS from '@editorjs/editorjs';
import EditorConfig  from './editorConfig';

export default function Editor() {
    const editor = new EditorJS(EditorConfig());
     

    const saveData = ()=>{
        editor.save().then((outputData) => {
            console.log('Article data: ', outputData)
          }).catch((error) => {
            console.log('Saving failed: ', error)
          });
    }
  return (
      <>
      <h1>Editor : powered by Editor.js</h1>
    <div id='editorjs'></div>
    <button onClick={saveData}>Save Proto</button>
      </>
    
  )
}
