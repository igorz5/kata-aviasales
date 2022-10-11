import React from "react";

import classes from "./App.module.scss";

import "../../scss/main.scss";
import logo from "../../assets/logo.svg";

import PriceFilter from "../PriceFilter/PriceFilter";
import TransferPanel from "../TransferPanel/TransferPanel";
import TicketList from "../TicketList/TicketList";
import Button from "../UI/Button/Button";
import { ITicket } from "../../types/ITicket";

const initialTickets: ITicket[] = [
  { price: 12000, id: 1 },
  { price: 34550, id: 2 },
  { price: 34435, id: 3 },
  { price: 54000, id: 4 },
];

const App: React.FC = () => {
  return (
    <div className="container">
      <div className={classes["logo-wrap"]}>
        <img src={logo} alt="logo" />
      </div>
      <div className={classes.main}>
        <div className={classes.left}>
          <TransferPanel />
        </div>
        <div className={classes.right}>
          <PriceFilter className={classes["price-filter"]} />
          <TicketList tickets={initialTickets} />
          <Button className={classes["more-btn"]}>
            Показать еще 5 билетов!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default App;
