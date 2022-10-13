import React from "react";

import classes from "./TicketList.module.scss";

import { ITicket } from "../../types/ITicket";
import { Ticket } from "../Ticket/Ticket";

interface TicketListProps {
  tickets?: ITicket[];
}

export const TicketList: React.FC<TicketListProps> = ({ tickets }) => {
  return (
    <ul className={classes["ticket-list"]}>
      {tickets?.map((ticket) => {
        return (
          <li key={ticket.id} className={classes.item}>
            <Ticket data={ticket} />
          </li>
        );
      })}
    </ul>
  );
};
