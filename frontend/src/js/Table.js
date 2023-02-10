import React from "react";
import TableRow from "./TableRow";
import TableHeaderRow from "./TableHeaderRow";

export default function Table(){

    let rows = [<TableHeaderRow/>]
    let numRows = 500
    for (var i = 0; i < numRows; i++) {
        rows.push(<TableRow/>);
    }
    return rows;
    
}