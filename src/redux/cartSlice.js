import { createSlice } from "@reduxjs/toolkit";

const fetchFromLocalStorage = () => {
    let card = localStorage.getItem('card');
    if (card) {
        return JSON.parse(card);
    }
    else {
        return [];
    }
}

const setinLocalStorage = (data) => {
    localStorage.setItem('card', JSON.stringify(data))
}


const initialStorage = {
    carts: fetchFromLocalStorage(),
    ItemCount: 0,
    totalAmount: 0
}

const cartSlice = createSlice({
    name: 'cards',
    initialState: initialStorage,
    reducers: {
        addToCard: (state, action) => {
            const isItemCart = state.carts.find(c => c.id == action.payload.id);
            if (isItemCart) {
                const tempData = state.carts.map(cart => {
                    if (cart.id === action.payload.id) {
                        let tempQuantity = cart.quantity + action.payload.quantity;
                        let tempTotalPrice = cart.price * tempQuantity;
                        return {
                            ...cart,
                            quantity: tempQuantity,
                            totalPrice: tempTotalPrice
                        }
                    }
                    else {
                        return {
                            ...cart,
                            quantity: action.payload.quantity,
                            totalPrice: cart.price * action.payload.quantity
                        }
                    }
                })
                state.carts = tempData;
                state.ItemCount = state.carts.length;
                setinLocalStorage(state.carts);
            }
            else {
                state.carts.push({
                    ...action.payload,
                    totalPrice: action.payload.price * action.payload.quantity
                });
                setinLocalStorage(state.carts);
            }
        },
        removeFromCart: (state, action) => {
            let newData = state.carts.filter(c => c.id !== action.payload);
            state.carts = newData;
            setinLocalStorage(state.carts);
        },
        clearCart: (state) => {
            state.carts = [];
            setinLocalStorage(state.carts);
        },
        getCartTotal: (state) => {
            state.totalAmount = state.carts.reduce((cartTotal, cartItem) => {
                return cartTotal + cartItem.price*cartItem.quantity;
            }, 0);
            state.ItemCount = state.carts.length;
        }
    },

});


export const { removeFromCart, clearCart, getCartTotal, addToCard } = cartSlice.actions

export default cartSlice.reducer