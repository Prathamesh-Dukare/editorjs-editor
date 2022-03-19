import tools from "./commonTools"

const  config = ()=>{
    return {
        holder : 'editorjs',
          autofocus: true,
          readOnly:false,
          placeholder: 'Let`s write an awesome story!',
          tools: tools
         
          // data:{
          //   time: 1556098174501,
          //   blocks: [
          //     {
          //       type: "header",
          //       data: {
          //         text: "Editor.js",
          //         level: 2
          //       }}]
          // }
}}
export default config