import { useState } from "react";
import BackDrop from "../components/BackDrop";
import Body from "./Body";
import Header from "./Header";

const Main = (props) => {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <section>
      <Header showCartHandler={showCartHandler} />
      <Body />
      <BackDrop hideCartHandler={hideCartHandler} showCart={showCart} />
    </section>
  );
};

export default Main;
