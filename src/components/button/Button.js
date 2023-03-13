import React from 'react';
import './style.css';
function Button(props) {

  const btnFunc = () => {
    //console.log("button function activated.");
    alert('inner child function')
  }

  return(
    <div className={"btnWrapper"}>
      <button 
        className={'mBtn'} 
        onClick={() => props.handleParentFunc(btnFunc)}
        >
        {props.display}
      </button>
    </div>
  );
}

export default Button;