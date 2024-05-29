import './index.css'
import React from 'react';

const Navbar = () => {

    return (
        <nav className='header git flex bg-black backdrop-blur-lg items-center justify-end h-20 w-full'>
            <div className='inputSpace flex justify-center items-center gap-3 text-white cursor-pointer mr-80'>
                <input
                    className='input py-3 px-6 0 flex rounded-full bg-white/20 focus:outline-none focus:border-2 focus:border-yellow-300 w-80'
                    placeholder='Pesquise aqui!'/>
                <span className='material-symbols-outlined hover:text-yellow-300'>search</span>
                <div>jfoenfcoefkjidspcosopcpśkevcp</div>
            </div>
        </nav>
    );
};

export default Navbar;