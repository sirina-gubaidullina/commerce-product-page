import React, { useContext, useState } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import ImgProduct from "../../assets/image-product-1-thumbnail.jpg";
import IconDelete from "../../Icons/IconDelete";
import CartContext from "../../store/cart-context";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmitting, setDidSubmitting] = useState(false);
  const cartCtx = useContext(CartContext);

  const FIREBASE_DOMAIN = "https://my-dummy-firebase-domain";

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch(`${FIREBASE_DOMAIN}/order.json`, {
      method: "POST",
      body: JSON.stringify({
        user: userData,
        orderItems: cartCtx.items,
      }),
    });
    setIsSubmitting(false);
    setDidSubmitting(true);
    cartCtx.clear();
  };

  const isSubmittingMOdalContent = (
    <div className={classes["product-container"]}>
      <h2>Sending order data...</h2>
    </div>
  );
  const didSubmittingMOdalContent = (
    <div className={classes["product-container"]}>
      <h2>Successfully sent the order!</h2>
    </div>
  );

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmitting && (
        <React.Fragment>
          <div className={classes.cart}>
            <h3>Cart</h3>
            <div className={classes["cart-line"]}></div>
          </div>
          {hasItems && (
            <div className={classes["product-container"]}>
              <div>
                {cartCtx.items.map((item) => (
                  <div className={classes["product-card"]} key={item.id}>
                    <div>
                      <img className={classes.image} src={ImgProduct} />
                    </div>
                    <div className={classes["cart-items"]}>
                      <div>{item.name}</div>
                      <div className={classes.price}>
                        ${item.price} x {item.amount}
                        <div className={classes.total}> {totalAmount}</div>
                      </div>
                    </div>
                    <button
                      onClick={cartItemRemoveHandler.bind(null, item.id)}
                      className={classes.delete}
                    >
                      <div className={classes["svg-image"]}>
                        <IconDelete />
                      </div>
                    </button>
                  </div>
                ))}
                {isCheckout && (
                  <Checkout
                    onConfirm={submitOrderHandler}
                    onCancel={props.onClose}
                  />
                )}
              </div>
              {!isCheckout && (
                <button
                  className={classes["button-checkout"]}
                  onClick={orderHandler}
                >
                  Checkout
                </button>
              )}
            </div>
          )}
          {!hasItems && (
            <div className={classes["empty-container"]}>
              Your cart is empty.
            </div>
          )}
        </React.Fragment>
      )}
      {isSubmitting && isSubmittingMOdalContent}
      {!isSubmitting && didSubmitting && didSubmittingMOdalContent}
    </Modal>
  );
};

export default Cart;
