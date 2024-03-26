import { useContext } from 'react';
import logoImg from '../assets/logo.jpg'
import Button from './UI/Button';
import CartContext from '../store/CartContext';
import UserProgressContext from '../store/UserProgressContext';

export default function Header() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
        return totalNumberOfItems + item.quantity;
    }, 0)

    function handleShowCart(){
        userProgressCtx.showCart();
    }

    function handleShowWishlist(){
        userProgressCtx.showWishlist();
    }

    return (
        <header id="main-header">
            <div id="title">
                <img src={logoImg} alt='logoImg'/>
                <h1>MarketApp</h1>
            </div>
            <nav>
                <Button textOnly onClick={handleShowCart}>
                    User
                </Button>
                <Button textOnly onClick={handleShowCart}>
                    Orders
                </Button>
                <Button textOnly onClick={handleShowWishlist}>
                    Wishlist
                </Button>
                <Button textOnly onClick={handleShowCart}>
                    Cart ({totalCartItems})
                </Button>
            </nav>
        </header>
    );
}