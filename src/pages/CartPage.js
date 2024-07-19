import React from 'react'
import NavBar from '../components/NavBar'

function CartPage() {
  return (
    <div>
        <NavBar />
        <div className='flex flex-col justify-between'>
            <div>
            <div className='p-3 text-2xl font-bold'>Shopping Cart</div>
            <div className='flex flex-row justify-between'>
                <div className='flex flex-row'>
                    <input className='mx-4 w-5' type='checkbox'/> 
                    <div><img className='w-48 h-60' src={"https://m.media-amazon.com/images/I/81IGqr-Jd6L._SL1500_.jpg"} alt="book" /></div>
                    <div className='px-4'>
                        <div className='font-bold text-3xl'>The Phoenix Project</div>
                        <div className='py-2'>by Gene KIM</div>
                        <div className='text-green-600'>In Stock</div>
                    </div>
                </div>
                <div className='mt-1 px-2 text-xl font-bold'>LKR 2000</div>
            </div>
            </div>
            <div>
                <div className='flex flex-row justify-between font-semibold text-2xl p-4'>
                    <div>Total</div>
                    <div>LKR 2000</div>
                </div>
        <div className='content-end'> <button className='w-screen my-2 bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded'>CHECKOUT</button></div>
            </div>
        </div>     
    </div>
  )
}

export default CartPage