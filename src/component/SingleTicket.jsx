import React from "react";

const SingleTicket = ({ title, status, description, id, priority, customer, date, addTicket }) => {
  return (
    <div
      className="card"
      onClick={() => {
        addTicket(title);
      }}
    >
      <div className="card__header">
        <h4 className="card__title">{title}</h4>
        <p className={status === "Open" ? "card__header__green" : "card__header__yellow"}>
          <i className={status === "Open" ? "fa-solid fa-circle circle-green circle-green" : "fa-solid fa-circle circle-green circle-yellow"}></i> {status}
        </p>
      </div>
      <p className="card__desc">{description}</p>
      <div className="card__footer">
        <div>
          <p>#{id}</p>
          <p className={priority === "High Priority" ? "red" : priority === "Medium Priority" ? "yellow" : "green"}>{priority}</p>
        </div>
        <div>
          <p>{customer}</p>
          <p>
            <i className="fa-solid fa-calendar-days"></i> {date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleTicket;
