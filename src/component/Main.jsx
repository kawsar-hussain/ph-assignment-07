import React from "react";
import Ticket from "./Ticket";

const ticketPromise = fetch("./ticket.json").then((res) => res.json());

const Main = ({ incrementInProgress, decrementInProgress, incrementResolved }) => {
  return (
    <main>
      <Ticket ticketPromise={ticketPromise} incrementInProgress={incrementInProgress} decrementInProgress={decrementInProgress} incrementResolved={incrementResolved} />
    </main>
  );
};

export default Main;
