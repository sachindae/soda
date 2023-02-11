import React from "react";
import TableRow from "./TableRow";
import TableHeaderRow from "./TableHeaderRow";

export default class Table extends React.Component{

    constructor(props){
        super(props);

        this.state = {};

        this.receiveChildValue = (idx1, width1, idx2, width2) => {
            //console.log(`Parent received value: ${idx1} ${width1} ${idx2} ${width2}`);
            for (var i = 0; i < numRows; i++) {
                var leftBox = document.getElementById(`input_row${i}_col${idx1}`)
                var rightBox = document.getElementById(`input_row${i}_col${idx2}`)
                leftBox.style.width = `${width1}px`;
                rightBox.style.width = `${width2}px`;
            }
            //console.log(width1)
        }

        this.columns = ["Company", "Role", "Location", "Link", "Heidi", "Sachinda", "Notes"]
        this.rows = [<TableHeaderRow columns={this.columns} fromChildToParentCallback={this.receiveChildValue}/>]
        let numRows = 500
        for (var i = 0; i < numRows; i++) {
            this.rows.push(<TableRow columns={this.columns} row_id={i}/>);
        }
    }
    
    render(){
        return this.rows;
    }
    
    
}