import { useContext } from "react";
import IconCart from "../../Icons/IconCart";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const hasItems = numberOfCartItems > 0;

  return (
    <button onClick={props.onClick} className={classes.button}>
      <div className={classes["svg-image"]}>
        <IconCart />
      </div>
      {hasItems && <span className={classes.badge}>{numberOfCartItems}</span>}
    </button>
  );
};

export default HeaderCartButton;
