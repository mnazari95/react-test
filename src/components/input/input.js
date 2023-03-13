import React from "react";
import './style.css'

const Input = (props) => {

    return(
        <div 
            className="inputWrapper">
            <input 
                className="mInput" 
                placeholder={props.ph}/>
        </div>
    );
}

export default Input;