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
    localStorage.setItem('cart', JSON.stringify(data))
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
                    if (cart.id == action.payload.id) {
                        let tempQuantity = cart.quantity + action.payload.id;
                        let tempTotalPrice = cart.price + tempQuantity;
                        return {
                            ...cart,
                            quantity: tempQuantity,
                            totalPrice: tempTotalPrice
                        }
                    }
                    else {
                        return cart;
                    }
                })
                state.carts = tempData;
                state.ItemCount = state.carts.length;
                setinLocalStorage(state.carts);
            }
            else {
                state.carts.push(action.payload);
                setinLocalStorage(state.carts);
            }
        },
        removeFromCart: (state, action) => {
            if (removeData) {
                let newData = state.carts.filter(c => c.id !== action.payload.id);
                state.carts = newData;
                setinLocalStorage(sta.carts);
            }
            else {
                console.log("cant find any data!");
            }
        },
        clearCart: (state) => {
            state.carts = [];
            setinLocalStorage(state.carts);
        },
        getCartTotal: (state) => {
            state.totalAmount = state.carts.reduce((cartTotal, cartItem) => {
                return cartTotal + cartItem.price;
            }, 0);
            state.ItemCount = state.carts.length;
        }
    },

});


export const { removeFromCart, clearCart, getCartTotal, addToCard } = cartSlice.actions

export default cartSlice.reducer