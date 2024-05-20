import { Fragment, useContext } from "react";

import SneakerButtons from "./SneakerButtons";
import classes from "./SneakerItem.module.css";
import CartContext from "../../store/cart-context";

const SneakerItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;
  const oldPrice = `$${props.oldPrice.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <Fragment>
      <div className={classes.container}>
        <h2>{props.brand}</h2>
        <h1>{props.name}</h1>
        <p className={classes.description}>{props.description}</p>
        <div className={classes["price-container"]}>
          <h3>{price}</h3>
          <p>{props.sale}</p>
        </div>
        <div className={classes["old-price"]}>
          <p>{oldPrice}</p>
        </div>
        <SneakerButtons onAddToCart={addToCartHandler} />
      </div>
    </Fragment>
  );
};

export default SneakerItem;
