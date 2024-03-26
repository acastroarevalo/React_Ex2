import { UserProgressContextProvider } from "./store/UserProgressContext";
import { CartContextProvider } from "./store/CartContext";
import Header from "./components/Header";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Wishlist from "./components/Wishlist";
import { WishlistContextProvider } from "./store/WishlistContext";

function App() {
  return (
    <UserProgressContextProvider>
      <WishlistContextProvider>
      <CartContextProvider>
        <Header/>
        <Products/>
        <Cart/>
        <Checkout/>
        <Wishlist/>
      </CartContextProvider>
      </WishlistContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
