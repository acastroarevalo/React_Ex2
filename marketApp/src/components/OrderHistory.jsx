import { useContext } from "react";
import Modal from "./UI/Modal";
import UserProgressContext from "../store/UserProgressContext";
import Button from "./UI/Button";
import OrdersContext from "../store/OrderHistoryContext";
import OrderHistoryItem from "./OrderHistoryItem";

export default function OrderHistory(){
    const ordersCtx = useContext(OrdersContext);
    const userProgressCtx = useContext(UserProgressContext);

    function handleCloseOrders(){
        userProgressCtx.hideOrders();
    }

    return(
        <Modal className="cart" 
        open={userProgressCtx.progress === 'orders'} 
        onClose={userProgressCtx.progress === 'orders' ? handleCloseOrders : null}>
            <h2>Order History</h2>
            <ul>
                {ordersCtx.items.map((item) => (
                    <OrderHistoryItem 
                    key={item.id} 
                    name={item.name}/>))}
            </ul>
            <p className="modal-actions">
                <Button textOnly onClick={handleCloseOrders}>Close</Button>
            </p>
        </Modal>
    )
}