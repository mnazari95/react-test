import React from 'react';
import style from './style.css';
function Button(props) {

  return(
    <div className='btnWrapper'>
      <button className='mBtn'>{props.display}</button>
    </div>
  );
}

export default Button;