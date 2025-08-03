import React, { useState } from 'react';

const ListOfTask = ({ taskLists, setTaskList }) => {
  const [completed, setCompleted] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState('');

  const toggleTask = (index) => {
    setCompleted((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const deleteTask = (index) => {
    const updatedList = [...taskLists];
    updatedList.splice(index, 1);
    setTaskList(updatedList);
    setCompleted((prev) => prev.filter((i) => i !== index)); 
  };

  const startEditing = (index, value) => {
    setEditIndex(index);
    setEditValue(value);
  };

  const handleEditChange = (e) => {
    setEditValue(e.target.value);
  };

  const saveEdit = (index) => {
    const updatedList = [...taskLists];
    updatedList[index] = editValue;
    setTaskList(updatedList);
    setEditIndex(null);
    setEditValue('');
  };

  const cancelEdit = () => {
    setEditIndex(null);
    setEditValue('');
  };

  const listOfTask = taskLists.map((task, index) => (
    <li
      key={index}
      className={`listStyleItem  ${
        completed.includes(index) ? 'completed' : ''
      }`}
    >
      {editIndex === index ? (
        <>
          <input
            type="text"
            value={editValue}
            onChange={handleEditChange}
            className="border"
          />
          <button onClick={() => saveEdit(index)} className="saveEdit">
            <i class="fa-solid fa-check"></i>
          </button>
          <button onClick={cancelEdit} className="cancelEdit">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </>
      ) : (
        <>
          <span onClick={() => toggleTask(index)} className="cursor">
            {task}
          </span>
         <button onClick={() => deleteTask(index)} className="deleteTask">
            <i class="fa-solid fa-trash"></i>
          </button>
          <button onClick={() => startEditing(index, task)} className="startEditing">
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
        </>
      )}
    </li>
  ));

return (
  <div>
    {taskLists.length > 0 && (
      <div className="list-task">
        <ul>{listOfTask}</ul>
      </div>
    )}
  </div>
);
};

export default ListOfTask;
