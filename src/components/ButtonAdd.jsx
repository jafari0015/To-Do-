import React from 'react';
import AddTask from './AddTask';

const ButtonAdd = (props) => {
const handleClick = () => {
  props.setAddTask(true);
  props.setShowError(false);
  localStorage.setItem("errorDismissed", "true"); 
};


  return (
    <div className='btn-component'>
      <div className='button-add'>
        <button onClick={handleClick}>
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
    </div>
  );
};

export default ButtonAdd;
