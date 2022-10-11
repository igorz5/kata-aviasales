import React, { useState } from "react";
import classNames from "classnames";

import classes from "./PriceFilter.module.scss";

const items = [
  { name: "cheap", label: "Самый дешевый" },
  { name: "fastest", label: "Самый быстрый" },
  { name: "optimal", label: "Оптимальный" },
];

interface PriceFilterProps {
  className?: string;
}

const PriceFilter: React.FC<PriceFilterProps> = ({ className }) => {
  const [active, setActive] = useState<string>("cheap");

  return (
    <div className={classNames(classes["price-filter"], className)}>
      <ul className={classes.list}>
        {items.map((item) => {
          const isActive = item.name === active;
          const onClick = () => setActive(item.name);
          return (
            <li
              key={item.name}
              className={classNames(
                classes.item,
                isActive && classes["item-active"]
              )}
            >
              <button
                type="button"
                onClick={onClick}
                className={classes["item-btn"]}
              >
                {item.label}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PriceFilter;
