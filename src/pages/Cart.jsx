import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCartTotal } from '../redux/cartSlice';
import CartComponent from '../components/cart/CartComponent';

function Cart() {
    const navigator = useNavigate();
    const dispatch = useDispatch();
    const { carts, ItemCount, totalAmount } = useSelector(state => state.carts);
    console.log(carts, ItemCount, totalAmount);
    useEffect(() => {
        dispatch(getCartTotal());
    }, [dispatch, carts]);

    return (
        <div>
            {
                carts.map((cart, i) => {
                    return (<CartComponent key={i} cart={cart}></CartComponent>)
                })
            }
            <div class="mt-6 h-full rounded-lg border mx-auto bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                <div class="flex justify-between">
                    <p class="text-lg font-bold">Ümumi Məbləğ: </p>
                    <div class="">
                        <p class="mb-1 text-lg font-bold">{totalAmount} AZN</p>
                        <p class="text-sm text-gray-700"> Qiymete EDV daxildir.</p>
                    </div>
                </div>
                <button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Sifaris ver</button>
            </div>
            <div></div>

        </div>
    )
}

export default Cart