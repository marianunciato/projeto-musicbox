import React from 'react';
import Sidebar from '../Sidebar/index';

const Navbar = () => {return (
    <nav className='header fixed flex bg-black/70 backdrop-blur-lg items-center place-content-between h-24 w-screen'>
        <div className='logoButton flex justify-start items-center gap-7'>
            <button className='p-9 rounded-r-md flex'>
                <span class="material-symbols-outlined text-white hover:text-amber-300">
                    menu
                </span> 
            </button>
            <h1 className='text-amber-400 text-3xl font-bold p-'>musicbox</h1>
        </div>
        <div className='options flex items-center text-white  gap-14 font-light text-lg'>
            <p className='flex hover:font-normal hover:transition-transform cursor-pointer'>Menu</p>
            <p className='flex hover:font-normal hover:transition-transform cursor-pointer'>Acessórios</p>
            <p className='flex hover:font-normal hover:transition-transform cursor-pointer'>Decoração</p>
            <p className='flex hover:font-normal hover:transition-transform cursor-pointer'>CD's e Vinis</p>
            <p className='flex hover:font-normal hover:transition-transform cursor-pointer'>Equipamentos de Som</p>
        </div>
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