import React from "react";
import Input from "./Input";

export default class TableRow extends React.Component{

// ({columns, row_id})
    constructor(props){
        super(props);

        this.state = {};

        this.row = 0;
        this.col = 0;

        this.keyListenerFn = (e) => {
            console.log(e)
            console.log(e.code, this.row, this.col)
    
            let newRow = this.row;
            let newCol = this.col;
            if (e.code === "ArrowUp"){
                newRow -= 1;
            } else if (e.code === "ArrowDown"){
                newRow += 1;
            } else if (e.code === "ArrowLeft"){
                newCol -= 1;
            } else if (e.code === "ArrowRight"){
                newCol += 1;
            } else {
                return;
            }
            let oldFocus = `input_row${this.row}_col${this.col}`;
            let newFocus = `input_row${newRow}_col${newCol}`;
            console.log(oldFocus + "    " + newFocus)
            document.getElementById(newFocus).focus();
            this.row = newRow;
            this.col = newCol;
            //document.getElementById(oldFocus).focus();
        }

        this.tmpFn = (e) => {this.keyListenerFn(e, props.row, props.col)}
    
        const addKeyListenerFn = (row, col, onOrOff) => {
            console.log("Test " + row);
            if (onOrOff) {
                this.row = row;
                this.col = col;
                document.addEventListener('keyup', this.keyListenerFn)
            } else {
                document.removeEventListener('keyup', this.keyListenerFn)
            }
        }
    
        this.row = []
        for (var i = 0; i < props.columns.length; i++){
            let inputBox = <Input _id={`input_row${props.row_id}_col${i}`} row={props.row_id} col={i} addKeyListenerFn={addKeyListenerFn}/>
            this.row.push(inputBox)
            if (i + 1 !== props.columns.length){
                let resizer = <span id={`resize_${i}`} className="resizer">|</span>
                this.row.push(resizer)
            }
        }
    }

    
    render(){
        return(
            <div>
                {this.row}
            </div>
        )
    }
    
}