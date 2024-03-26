import {createContext, useReducer} from 'react'

const OrdersContext = createContext({
    items: [],
    addItem: (item) => {}
});

function ordersReducer(state, action){
    if(action.type === 'ADD_ITEM'){
        const updatedItems = [...state.items];
        updatedItems.push({...action.item});

        return {...state, items: updatedItems};
    }

    return state;
}

export function OrdersContextProvider({children}){
    const [orders, dispatchOrdersAction] = useReducer(ordersReducer, {items: []});

    function addItem(item) {
        dispatchOrdersAction({type: 'ADD_ITEM', item})
    }

    const ordersContext = {
        items: orders.items,
        addItem
    }
    console.log(ordersContext);
    return <OrdersContext.Provider value={ordersContext}>{children}</OrdersContext.Provider>
}

export default OrdersContext;