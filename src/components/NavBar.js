import React from 'react';

const NavBar = () => {
    return (
        <div className='flex justify-between bg-black text-white font-semibold text-xl' >
             <div className="flex flex-row ">
                <div className='p-2'>Nadeera BookShop</div>
                <a className='p-2' href="/">Home</a>
                <a className='p-2' href="/Contactus">About Us</a>
            </div>
            <div className="flex flex-row">
                <a className='p-2' href="/cart">Cart</a>
                <button className='p-2'>Logout</button>
            </div>
        </div>
    );
};

export default NavBar;