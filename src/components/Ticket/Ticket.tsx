import React from "react";

import classes from "./Ticket.module.scss";
import logo from "../../assets/s7_logo.png";

import { ITicket } from "../../types/ITicket";

interface TicketProps {
  data: ITicket;
}

export const Ticket: React.FC<TicketProps> = ({ data }) => {
  return (
    <div className={classes.ticket}>
      <div className={classes.header}>
        <div className={classes.price}>
          {data.price.toLocaleString("ru-RU", {
            style: "currency",
            currency: "RUB",
          })}
        </div>
        <img src={logo} alt="Logo" className={classes.logo} />
      </div>
      <div className={classes.body}>
        <ul className={classes.rows}>
          <li className={classes.row}>
            <div className={classes.col}>
              <div className={classes.label}>MOW – HKT</div>
              <div className={classes.text}>10:45 – 08:00</div>
            </div>
            <div className={classes.col}>
              <div className={classes.label}>В пути</div>
              <div className={classes.text}>21ч 15m</div>
            </div>
            <div className={classes.col}>
              <div className={classes.label}>2 пересадки</div>
              <div className={classes.text}>HKG, JNB</div>
            </div>
          </li>
          <li className={classes.row}>
            <div className={classes.col}>
              <div className={classes.label}>MOW – HKT</div>
              <div className={classes.text}>11:20 – 00:50</div>
            </div>
            <div className={classes.col}>
              <div className={classes.label}>В пути</div>
              <div className={classes.text}>13ч 30м</div>
            </div>
            <div className={classes.col}>
              <div className={classes.label}>1 пересадка</div>
              <div className={classes.text}>HKG</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
