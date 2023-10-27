import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../redux/cartSlice';

function CartComponent({ cart }) {
    const dispatch = useDispatch();
    const removeItem = (id) => {
        dispatch(removeFromCart(id));
    }
    return (
        <div className='my-10'>
            <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                <img src={cart.image} className='max-h-[100px]' />
                <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div class="mt-5 sm:mt-0">
                        <h2 class="text-lg font-bold text-gray-900">{cart.title}</h2>
                        <p class="mt-1 text-2xl text-green-400">Bu mehsulun Umumi meblegi: {cart.totalPrice} AZN</p>
                    </div>
                    <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                        <div class="flex items-center border-gray-100">
                            <div class="h-8  bg-white text-center text-2xl outline-none" >Quantity : {cart.quantity}</div>
                        </div>
                        <div class="flex items-center space-x-4">
                            <p class="text-sm">{cart.price} AZN</p>
                            <svg xmlns="http://www.w3.org/2000/svg" onClick={() => {
                                removeItem(cart.id);
                            }} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartComponent