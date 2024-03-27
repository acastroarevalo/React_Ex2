import { createContext, useState } from "react";

const UserProgressContext = createContext({
    progress: '',
    showCart: () => {},
    showCheckout: () => {},
    showWishlist: () => {},
    showOrders: () => {},
    showUser: () => {},
    hide: () => {}
});

export function UserProgressContextProvider({children}){
    const [userProgress, setUserProgress] = useState('');
    
    function showCart(){
        setUserProgress('cart');
    }
   
    function showCheckout(){
        setUserProgress('checkout');
    }

    function showWishlist(){
        setUserProgress('wishlist');
    }

    function showOrders(){
        setUserProgress('orders');
    }

    function showUser(){
        setUserProgress('user');
    }
    
    function hide(){
        setUserProgress('');
    }

    const userProgressCtx = {
        progress: userProgress,
        showCart,
        showCheckout,
        showWishlist,
        showOrders,
        showUser,
        hide
    };
    return(
        <UserProgressContext.Provider value={userProgressCtx}>{children}</UserProgressContext.Provider>
    );
}

export default UserProgressContext;