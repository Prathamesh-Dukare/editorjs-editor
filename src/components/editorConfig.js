const  config = ()=>{
    return {
        holder : 'editorjs',
        // changes will be loggged! 
        // onChange: (api, event) => {
        //     console.log('Now I know that Editor\'s content changed!', event)
        //   },
          //Editor will be autp focused!
          autofocus: true,
          placeholder: 'Let`s write an awesome story!',
          readOnly: false,
}}
export default config