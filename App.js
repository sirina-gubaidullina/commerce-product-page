import { useState } from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import Sneakers from "./components/Sneakers/Sneakers";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Sneakers />
    </CartProvider>
  );
}

export default App;
