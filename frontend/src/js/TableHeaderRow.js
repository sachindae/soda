import React, {useEffect} from "react";
import HeaderInput from "./HeaderInput";

export default function TableHeaderRow({columns, fromChildToParentCallback}){

    // Create/load column names and resize objects
    var resizers = []
    let row = []

    for (var i = 0; i < columns.length; i++){
        let inputBox = <HeaderInput _id={`input_${i}`} _defaultValue={columns[i]}/>
        row.push(inputBox)
        if (i + 1 !== columns.length){
            let resizer = <span id={`resize_${i}`} className="resizer">|</span>
            row.push(resizer)
            resizers.push(`resize_${i}`)
        }
    }

    useEffect (() => {

        var leftBox = document.getElementById("company");
        var rightBox = document.getElementById("role");

        let xCord = 0;
        let currentResizer = "";
        let leftColIdx = "";
        let rightColIdx = "";

        // 3. Mouse released
        const onMouseUpResize = (event) => {
            console.log("Mouse Up")
            document.removeEventListener("mousemove", onMouseMoveResize);
            document.removeEventListener("mouseup", onMouseUpResize);
        }

        // 2. Mouse moving, do resizing
        const onMouseMoveResize = (event) => {
            console.log("Mouse Moving " + currentResizer);
            const dx = (parseFloat(event.clientX, 10) - xCord);
            fromChildToParentCallback(leftColIdx, parseFloat(window.getComputedStyle(leftBox).width, 10), 
                                      rightColIdx, parseFloat(window.getComputedStyle(rightBox).width, 10));
            leftBox.style.width = `${parseFloat(window.getComputedStyle(leftBox).width, 10) + dx}px`;
            rightBox.style.width = `${parseFloat(window.getComputedStyle(rightBox).width, 10) - dx}px`;
            xCord = event.clientX;
        }

        // 1. Mouse pushed down, activate resizing
        const onMouseDownResize = (event) => {
            console.log('Mouse Down' + event.srcElement.id);
            xCord = parseFloat(event.clientX, 10);
            currentResizer = event.srcElement.id
            let resizerIdx = parseInt(currentResizer.split('_')[1], 10);
            leftColIdx = resizerIdx;
            rightColIdx = resizerIdx + 1;
            leftBox = document.getElementById(`input_${leftColIdx}`);
            rightBox = document.getElementById(`input_${rightColIdx}`);
            document.addEventListener("mousemove", onMouseMoveResize);
            document.addEventListener("mouseup", onMouseUpResize);
        }

        // Add event listeners to resizers
        for (var i = 0; i < resizers.length; i++){
            document.getElementById(resizers[i]).addEventListener("mousedown", onMouseDownResize);
        }
    })
    

    return(
        <div>
            {row}
        </div>
    )
}