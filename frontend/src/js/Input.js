import React from "react";

export default class Input extends React.Component { 

    //({_id, row, col, addKeyListenerFn}){
    constructor(props){
        super(props);

        this.state = {};
        this.id = props._id

        this.onFocus = () => {
            console.log('Focused: ' + props._id);
            props.addKeyListenerFn(props.row, props.col, true);
        }
    
        this.onBlur = () => {
            console.log('Unfocused: ' + props._id);
            props.addKeyListenerFn(props.row, props.col, false);
        }
    }

    //this.boundEventHandler = keyListenerFn.bind(this, row, col)
    
    render(){
        return (
            <input type="text" id={this.id} onFocus={this.onFocus} onBlur={this.onBlur}/>
        )
    }
}