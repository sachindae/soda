import React from "react";

export default function TableRow(){

    return(
        <>
            <div>
                <input type="text" id="company" defaultValue="Google"/>
                <input type="text" id="role" defaultValue="Software Engineer"/>
                <input type="text" id="location" defaultValue="Boston, MA"/>
                <input type="text" id="link" defaultValue="jobs.google.com"/>
                <input type="text" id="appliedH"/>
                <input type="text" id="appliedS"/>
                <input type="text" id="notes" defaultValue="Notes"/> 
            </div>
        </>
    )
}