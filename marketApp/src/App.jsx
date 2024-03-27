import { UserProgressContextProvider } from "./store/UserProgressContext";
import { CartContextProvider } from "./store/CartContext";
import Header from "./components/Header";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Wishlist from "./components/Wishlist";
import { WishlistContextProvider } from "./store/WishlistContext";
import OrderHistory from "./components/OrderHistory";
import { OrdersContextProvider } from "./store/OrderHistoryContext";
import User from "./components/User";

function App() {
  return (
    <UserProgressContextProvider>
      <WishlistContextProvider>
      <CartContextProvider>
      <OrdersContextProvider>
        <Header/>
        <Products/>
        <Cart/>
        <Checkout/>
        <Wishlist/>
        <OrderHistory/>
        <User/>
        </OrdersContextProvider>
      </CartContextProvider>
      </WishlistContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
