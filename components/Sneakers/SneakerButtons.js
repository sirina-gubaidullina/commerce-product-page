import { Fragment, useState } from "react";

import classes from "./SneakerButtons.module.css";
import IconMinus from "../../Icons/IconMinus";
import IconPlus from "../../Icons/IconPlus";
import IconCart from "../../Icons/IconCart";

const SneakerButtons = (props) => {
  const [amountSneakers, setAmountSneakers] = useState(0);
  const addAmountHandler = () => {
    setAmountSneakers((amountSneakers) => amountSneakers + 1);
  };
  const removeAmountHandler = (amountSneakers) => {
    if (amountSneakers > 0)
      setAmountSneakers((amountSneakers) => amountSneakers - 1);
  };
  const submitHandler = () => {
    const enteredAmount = +amountSneakers;
    if (enteredAmount === 0) {
      return;
    }

    props.onAddToCart(enteredAmount);
  };

  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes["button-container"]}>
          <button
            onClick={() => removeAmountHandler(amountSneakers)}
            className={classes["icon-button"]}
          >
            <IconMinus />
          </button>
          <div className={classes.amount}>
            <p>{amountSneakers}</p>
          </div>
          <button
            onClick={() => addAmountHandler(amountSneakers)}
            className={classes["icon-button"]}
          >
            <IconPlus />
          </button>
        </div>
        <button onClick={submitHandler} className={classes["add-button"]}>
          <IconCart />
          Add to cart
        </button>
      </div>
    </Fragment>
  );
};

export default SneakerButtons;
