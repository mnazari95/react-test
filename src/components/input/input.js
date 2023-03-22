import React,{useState} from "react";
import './style.css'

const Input = (props) => {

    const inputValue = useState("")

    const LabelElem =  (props) => {
        return(
            <div className="inputLabel">{props.label}</div>
        );
    }

    return(
        <div className="inputWrapper">
            <LabelElem label={props.ph}/>
            <input className="mInput"/>
        </div>
    );
}

export default Input;