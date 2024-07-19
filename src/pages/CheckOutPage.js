import React from 'react'
import NavBar from '../components/NavBar'

function CheckOutPage() {
  return (
    <div>
        <NavBar />
        <div className='p-4'>
        <p className='py-2 text-3xl font-bold text-center'>CHECKOUT</p>
            <div>
                <div className='text-2xl font-semibold text-orange-500'>Shipping Address</div>
                <div className='flex flex-col px-8'>
                    <div className='flex flex-col py-2'>
                        <div className='font-semibold'>Name</div>
                        <input className='w-96 p-2' type='text' placeholder='Enter your name'/>
                    </div>
                    <div className='flex flex-col py-2'>
                        <div className='font-semibold'>Address</div>
                        <input className='w-96 p-2' type='text' placeholder='Enter your address'/>
                    </div>
                    <div className='flex flex-col py-2'>
                        <div className='font-semibold'>Postal Code</div>
                        <input className='w-96 p-2' type='text' placeholder='Enter your address'/>
                    </div>
                    <div className='flex flex-col py-2'>
                        <div className='font-semibold'>Phone Number</div>
                        <input className='w-96 p-2' type='text' placeholder='Enter your address'/>
                    </div>
                </div>
            </div>
            <div>
                <div className='text-2xl font-semibold text-orange-500'>Payments</div>
                <div className='flex flex-col px-8'>
                    <div className='flex flex-col py-2'>
                        <div className='font-semibold'>Card Number</div>
                        <input className='w-96 p-2' type='text' placeholder='Enter your name'/>
                    </div>
                    <div className='flex flex-col py-2'>
                        <div className='font-semibold'>Card Holder's Name</div>
                        <input className='w-96 p-2' type='text' placeholder='Enter your address'/>
                    </div>
                    <div className='flex flex-col py-2'>
                        <div className='font-semibold'>Expired Date</div>
                        <input className='w-96 p-2' type='date' placeholder='Enter your address'/>
                    </div>
                    <div className='flex flex-col py-2'>
                        <div className='font-semibold'>CVC Number</div>
                        <input className='w-96 p-2' type='text' placeholder='Enter your address'/>
                    </div>
                </div>
            </div>
            
            <div className='content-end'> <button className='w-screen my-2 bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded'>PAY NOW</button></div>
        </div>
    </div>
  )
}

export default CheckOutPage