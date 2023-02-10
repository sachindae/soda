import React from "react";

export default function TableHeaderRow(){

    return(
        <>
            <div>
                <input type="text" class="textshadow" id="company" defaultValue="Company"/>
                <input type="text" class="textshadow" id="role" defaultValue="Role"/>
                <input type="text" class="textshadow" id="location" defaultValue="Location"/>
                <input type="text" class="textshadow" id="link" defaultValue="Link"/>
                <input type="text" class="textshadow" id="appliedH" defaultValue="Heidi"/>
                <input type="text" class="textshadow" id="appliedS" defaultValue="Sachinda"/>
                <input type="text" class="textshadow" id="notes" defaultValue="Notes"/> 
            </div>
        </>
    )
}