import React, {useState} from 'react';

const Navbar = () => {

    return (
    <nav className='header fixed flex bg-black/70 backdrop-blur-lg items-center place-content-evenly h-16 w-screen'>
        <div className='logAndCart flex items-center gap-7 p-10'>
            <span className='material-symbols-outlined text-white hover:text-amber-300 cursor-pointer'>
                favorite
            </span>
            <span className='material-symbols-outlined text-white hover:text-amber-300 cursor-pointer'>
                shopping_bag
            </span>
            <span className='material-symbols-outlined text-white hover:text-amber-300 cursor-pointer'>
                account_circle
            </span>
        </div>
    </nav>
  );
};

export default Navbar;