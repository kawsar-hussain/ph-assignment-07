import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TaskStatus = ({ taskStatus, removeTicket, decrementInProgress, incrementResolved }) => {
  const [resolvedTasks, setResolvedTasks] = useState([]);

  const handleComplete = (title) => {
    toast.success("In Progress!");
    removeTicket(title);
    setResolvedTasks((prev) => [...prev, title]);
    if (decrementInProgress) {
      decrementInProgress();
    }
    if (incrementResolved) {
      incrementResolved();
    }
  };

  return (
    <div className="task">
      <div className="status">
        <h2>Task Status</h2>
        {taskStatus.length === 0 ? (
          <p style={{ color: "gray" }}>Select a ticket to add to Task Status</p>
        ) : (
          taskStatus.map((title, index) => (
            <div className="status-container" key={index} style={{ display: "block" }}>
              <p>{title}</p>
              <button className="status-btn" onClick={() => handleComplete(title)}>
                Complete
              </button>
            </div>
          ))
        )}
      </div>
      <div className="resolved">
        <h2>Resolved Task</h2>
        {resolvedTasks.length === 0 ? (
          <p style={{ color: "gray" }}>No resolved tasks yet</p>
        ) : (
          resolvedTasks.map((title, index) => (
            <div className="resolved-container" key={index} style={{ display: "block" }}>
              <p>{title}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TaskStatus;
