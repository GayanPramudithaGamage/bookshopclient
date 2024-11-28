import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext'; 

const NavBar = () => {
    const navigate = useNavigate();
    const { logout } = React.useContext(AuthContext);

    const handleLogout = async (e) => {
        e.preventDefault();
        await logout();
        navigate('/login');
    };

    return (
        <div className='flex justify-between bg-blue-600 text-white font-semibold text-xl' >
             <div className="flex flex-row ">
                <div className='p-2'>Nadeera BookShop</div>
                <a className='p-2' href="/">Home</a>
                <a className='p-2' href="/Contactus">About Us</a>
            </div>
            <div className="flex flex-row">
                <a className='p-2' href="/cart">Cart</a>
                <button onClick={handleLogout} className='p-2'>Logout</button>
            </div>
        </div>
    );
};

export default NavBar;