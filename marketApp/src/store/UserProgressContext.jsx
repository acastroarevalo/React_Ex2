import { createContext, useState } from "react";

const UserProgressContext = createContext({
    progress: '',
    showCart: () => {},
    hideCart: () => {},
    showCheckout: () => {},
    hideCheckout: () => {},
    showWishlist: () => {},
    hideWishlist: () => {}
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

    const userProgressCtx = {
        progress: userProgress,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout,
        showWishlist,
        hideWishlist
    };
    return(
        <UserProgressContext.Provider value={userProgressCtx}>{children}</UserProgressContext.Provider>
    );
}

export default UserProgressContext;