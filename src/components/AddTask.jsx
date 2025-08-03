import React, { useState, useEffect } from 'react';
import ListOfTask from './ListOfTask';
import ButtonAdd from './ButtonAdd';
import Error from './Error';


const AddTask = () => {
  const [addTasks, setAddTask] = useState(() => {
    const saved = localStorage.getItem("addTasksVisible");
    return saved === "true"; 
  });
  
const [showError, setShowError] = useState(() => {
  const dismissed = localStorage.getItem("errorDismissed");
  return dismissed !== "true";
});


  const [taskLists, setTaskList] = useState(() => {
    const saved = localStorage.getItem("taskLists");
    return saved ? JSON.parse(saved) : [];
  });

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    localStorage.setItem("taskLists", JSON.stringify(taskLists));
  }, [taskLists]);


  useEffect(() => {
    localStorage.setItem("addTasksVisible", addTasks);
  }, [addTasks]);
  
useEffect(() => {
  localStorage.setItem("errorDismissed", showError ? "false" : "true");
}, [showError]);


  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = inputValue.trim();
    if (trimmed) {
      setTaskList(prev => [...prev, trimmed]);
      setInputValue("");
    }
  };

  return (
    <section>
      {showError && <Error />}
      {addTasks && (
        <section>
          <form onSubmit={handleSubmit} className='addTaskForm'>
            <h2 className='header-title'>Add Your Task</h2>
            <input
              type="text"
              placeholder='e.g fix the car'
              name='tasks'
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button className='submitBtn' type="submit">ADD+</button>
            <button className='closeBtn' type="button" onClick={() => setAddTask(false)}>
             <i class="fa-solid fa-x"></i>
            </button>
          </form>
        </section>
      )}
      {
      <ListOfTask taskLists={taskLists} setTaskList={setTaskList} />
    }
     <ButtonAdd  setAddTask = {setAddTask} setShowError  = {setShowError}/>
    </section>
  );
};

export default AddTask;
