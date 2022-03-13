const  config = ()=>{
    return {
        holderId : 'editorjs',
        onChange: (api, event) => {
            console.log('Now I know that Editor\'s content changed!', event)
          },
          tools: {
            myOwnParagraph: "MyParagraph"
          },
          defaultBlock: 'myOwnParagraph'
    }
}
export default config