import React, { useState, useEffect } from "react";
import TaskStatus from "./TaskStatus";
import SingleTicket from "./SingleTicket";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Ticket = ({ ticketPromise, incrementInProgress, decrementInProgress, incrementResolved }) => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [taskStatus, setTaskStatus] = useState([]);

  useEffect(() => {
    ticketPromise.then((data) => {
      setTickets(data);
      setLoading(false);
    });
  }, [ticketPromise]);

  const addTicket = (title) => {
    toast.success("In Progress!");
    setTaskStatus((prev) => [...prev, title]);
    if (incrementInProgress) {
      incrementInProgress();
    }
  };

  const removeTicket = (title) => {
    setTickets((prevTickets) => prevTickets.filter((ticket) => ticket.title !== title));
    setTaskStatus((prev) => prev.filter((task) => task !== title));
  };

  return (
    <div className="ticket">
      <div className="ticketSection">
        <h2>Customer Tickets</h2>
        {loading ? (
          <h3>Ticket is loading...</h3>
        ) : (
          <div className="card-container">
            {tickets.map((ticket) => (
              <SingleTicket
                key={ticket.id}
                title={ticket.title}
                status={ticket.status}
                description={ticket.description}
                id={ticket.id}
                priority={ticket.priority}
                customer={ticket.customer}
                date={ticket.createdAt}
                addTicket={() => addTicket(ticket.title)}
              ></SingleTicket>
            ))}
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />
          </div>
        )}
      </div>
      <TaskStatus taskStatus={taskStatus} removeTicket={removeTicket} decrementInProgress={decrementInProgress} incrementResolved={incrementResolved}></TaskStatus>
    </div>
  );
};

export default Ticket;
