import React from "react";
import { Provider } from "react-redux";

import classes from "./App.module.scss";

import "../../scss/main.scss";
import logo from "../../assets/logo.svg";

import TransferPanel from "../TransferPanel/TransferPanel";
import PriceFilter from "../PriceFilter/PriceFilter";
import { TicketList } from "../TicketList/TicketList";
import { Button } from "../UI/Button/Button";
import { ITicket } from "../../types/ITicket";
import { store } from "../store/store";

const initialTickets: ITicket[] = [
  { price: 12000, id: 1 },
  { price: 34550, id: 2 },
  { price: 34435, id: 3 },
  { price: 54000, id: 4 },
];

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className={classes.container}>
        <div className={classes["logo-wrap"]}>
          <img src={logo} alt="logo" />
        </div>
        <main className={classes.main}>
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
        </main>
      </div>
    </Provider>
  );
};

export default App;
