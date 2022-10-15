import React from "react";
import ViewportList from "react-viewport-list";

import classes from "./TicketList.module.scss";

import { ITicket } from "../../types/ITicket";
import Ticket from "../Ticket/Ticket";

interface TicketListProps {
  tickets?: ITicket[];
}

const TicketList: React.FC<TicketListProps> = ({ tickets }) => {
  return (
    <ul>
      <ViewportList items={tickets} itemMinSize={184}>
        {(item) => {
          return (
            <li key={item.id} className={classes.item}>
              <Ticket data={item} />
            </li>
          );
        }}
      </ViewportList>
    </ul>
  );
};

export default TicketList;
