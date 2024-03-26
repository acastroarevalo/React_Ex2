import { useContext } from 'react';
import Button from './UI/Button';
import CartContext from '../store/CartContext';

export default function ProductItem({product}){
    const cartCtx = useContext(CartContext);
    function handleAddProductToCart(){
        cartCtx.addItem(product);
    }
    return(
        <li className="meal-item">
            <article>
                <img src={`http://localhost:3000/${product.image}`} alt={product.name} />
                <div>
                    <h3>{product.name}</h3>
                    <p className="meal-item-price">{product.price}</p>
                    <p className="meal-item-description">{product.description}</p>
                </div>
                <p className="meal-item-actions">
                    <Button onClick={handleAddProductToCart}>Add to Cart</Button>
                </p>
            </article>
        </li>
    )
}