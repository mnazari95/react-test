import React from 'react';
import style from './style.css';
function Button(props) {

  const btnFunc = () => {
    console.log("button function activated.");
  }

  return(
    <div className='btnWrapper'>
      <button className='mBtn' onClick={() => props.handleParentFunc(btnFunc)}>
        {props.display}
      </button>
    </div>
  );
}

export default Button;