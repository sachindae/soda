import React from "react";

export default function HeaderInput({_id, _defaultValue}){
    return (
        <input type="text" className="textshadow" id={_id} defaultValue={_defaultValue}/>
    )
}