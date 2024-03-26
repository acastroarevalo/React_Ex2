import { createContext, useState } from "react";

const UserProgressContext = createContext({
    progress: '',
    showCart: () => {},
    hideCart: () => {},
    showCheckout: () => {},
    hideCheckout: () => {},
    showWishlist: () => {},
    hideWishlist: () => {},
    showOrders: () => {},
    hideOrders: () => {}
});

export function UserProgressContextProvider({children}){
    const [userProgress, setUserProgress] = useState('');
    
    function showCart(){
        setUserProgress('cart');
    }
    
    function hideCart(){
        setUserProgress('');
    }
   
    function showCheckout(){
        setUserProgress('checkout');
    }
    
    function hideCheckout(){
        setUserProgress('');
    }

    function showWishlist(){
        setUserProgress('wishlist');
    }
    
    function hideWishlist(){
        setUserProgress('');
    }

    function showOrders(){
        setUserProgress('orders');
    }
    
    function hideOrders(){
        setUserProgress('');
    }

    const userProgressCtx = {
        progress: userProgress,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout,
        showWishlist,
        hideWishlist,
        showOrders,
        hideOrders
    };
    return(
        <UserProgressContext.Provider value={userProgressCtx}>{children}</UserProgressContext.Provider>
    );
}

export default UserProgressContext;