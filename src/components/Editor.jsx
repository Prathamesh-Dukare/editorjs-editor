import React from 'react'
import EditorJS from '@editorjs/editorjs';

export default function Editor() {
    const editor = new EditorJS({
        holder: 'editorjs'
      });
  return (
    <div id='editorjs'>Editor</div>
  )
}
