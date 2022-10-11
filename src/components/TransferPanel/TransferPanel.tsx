import React, { useState } from "react";

import classes from "./TransferPanel.module.scss";

const initialTransfers = [
  { name: "all", label: "Все", checked: false },
  { name: "none", label: "Без пересадок", checked: false },
  { name: "one", label: "1 пересадка", checked: false },
  { name: "two", label: "2 пересадки", checked: false },
  { name: "three", label: "3 пересадки", checked: false },
];

const TransferPanel: React.FC = () => {
  const [transfers, setTransfers] = useState(initialTransfers);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTransfers = transfers.map((item) => {
      if (e.target.name === "all") {
        return { ...item, checked: e.target.checked };
      }

      return e.target.name === item.name
        ? { ...item, checked: e.target.checked }
        : item;
    });

    setTransfers(newTransfers);
  };

  return (
    <div className={classes["transfer-panel"]}>
      <h3 className={classes.title}>Количество пересадок</h3>
      <ul className={classes.inputs}>
        {transfers.map((item) => {
          const id = `transfer-${item.name}`;
          return (
            <li key={id}>
              <label className={classes.label} htmlFor={id}>
                <input
                  type="checkbox"
                  name={item.name}
                  id={id}
                  checked={item.checked}
                  onChange={onChange}
                />
                <span className={classes.input}></span>
                <span>{item.label}</span>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TransferPanel;
