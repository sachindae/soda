import React from "react";
import TableRow from "./TableRow";
import TableHeaderRow from "./TableHeaderRow";

export default class Table extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            widths: []
        };

        this.receiveChildValue = (idx1, width1, idx2, width2) => {
            console.log(`Parent received value: ${idx1} ${width1} ${idx2} ${width2}`);
            let widths = this.state.widths;
            widths[idx1] = `${width1}px`;
            widths[idx2] = `${width2}px`;
            this.setState({widths: widths}, () => {
                ;//console.log(this.state)
            })
            
            for (var i = 0; i < this.numRows; i++) {
                var leftBox = this.boxes[idx1][i]; //document.getElementById(`input_row${i}_col${idx1}`)
                var rightBox = this.boxes[idx2][i]; //document.getElementById(`input_row${i}_col${idx2}`)
                leftBox.style.width = `${width1}px`;
                rightBox.style.width = `${width2}px`;
            }
            
            //console.log(width1)
        }

        this.columns = ["Company", "Role", "Location", "Link", "Heidi", "Sachinda", "Notes"]
        let headerRow = <TableHeaderRow columns={this.columns} fromChildToParentCallback={this.receiveChildValue}/>
        this.numRows = 500
        this.rows = [headerRow]
        for (let i = 0; i < this.numRows; i++) {
            this.rows.push(<TableRow columns={this.columns} row_id={i}/>);
        }

        for (let i = 0; i < this.columns.length; i++){
            this.state.widths.push('162.5px');
        }
        

        console.log(this.state)
    }

    componentDidMount(){

        // Get references to all boxes in Table
        this.boxes = new Array(this.columns.length);
        for (var c = 0; c < this.columns.length; c++){
            let arr = []
            for (var i = 0; i < this.numRows; i++) {
                var Box = document.getElementById(`input_row${i}_col${c}`)
                arr.push(Box);
            }
            this.boxes[c] = arr
        }
    }
    
    render(){
        return this.rows;
    }
    
    
}