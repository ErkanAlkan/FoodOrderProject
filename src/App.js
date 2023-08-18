import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartButtonClick, SetCartButtonClick] = useState();
  const cartButtonStatus = (clickInfo) => {
    SetCartButtonClick(clickInfo);
  };
  return (
    <CartProvider>
      {cartButtonClick && (
        <Cart
          onCloseModal={cartButtonStatus}
          onBackdropClick={cartButtonStatus}
        />
      )}
      <Header onCartButtonClick={cartButtonStatus} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
