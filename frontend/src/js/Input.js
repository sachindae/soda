import React from "react";

export default class Input extends React.Component { 

    constructor(props){
        super(props);

        this.state = {};
        this.id = props._id

        this.onFocus = () => {
            //console.log('Focused: ' + props._id);
            props.addKeyListenerFn(props.row, props.col, true);
        }
    
        this.onBlur = () => {
            //console.log('Unfocused: ' + props._id);
            props.addKeyListenerFn(props.row, props.col, false);
        }
    }

    render(){
        return (
            <input type="text" id={this.id} onFocus={this.onFocus} onBlur={this.onBlur} />
        )
    }
}