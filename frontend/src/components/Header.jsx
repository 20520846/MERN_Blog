import React, { useState } from 'react'
import {images} from '../constants'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {IoIosArrowDown} from 'react-icons/io'

const navItemInfo = [
    {name: "Home", type: "link"},
    {name: "Articles", type: "link"},
    {name: "Pages", type: "dropdown", items: ['About us', 'Contact us']},
    {name: "Pricing", type: "link"},
    {name: "FAQ", type: "link"},
]

const NavItem = ({item}) => {
    return (
        <li className='relative group hover:font-bold'>
            {item.type === "link" ? (
                <>
                    <a href="/" className='px-4 py-2'>
                        {item.name}
                    </a>
                </>
            ) : (
                <>
                    <a href="/" className='px-4 py-2 flex gap-x-1 items-center'>
                        <span>
                            {item.name}
                        </span>
                        <IoIosArrowDown></IoIosArrowDown>
                    </a>
                    <div className='hidden transiotion-all duration-500 pt-4 absolute bottom-0 right-0 transform translate-y-full group-hover:block w-max'>
                        <ul className='flex flex-col shadow-lg rounded-lg overflow-hidden'>
                            {item.items.map((page) => (
                                    <a href='/' className='hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft'>
                                        {page}
                                    </a>
                            ))}
                        </ul>
                    </div>
                </>)}
            
        </li>
    );
};

const Header = () => {
    const [navIsVisible, setNavIsVisible] = useState(false);

    const navVisibilityHandler = () => {
        setNavIsVisible((curState) => {
            return !curState;
        });
    };
  return (
    <section>
        <header className='container mx-auto px-5 flex justify-between py-4 items-center'>
            <div>
                 <img className='w-16' src={images.Logo} alt='logo'></img> 
            </div>
            <div className='lg:hidden z-50'>
               {navIsVisible ? (
                <AiOutlineClose className='w-6 h-6' onClick={navVisibilityHandler} />
                ) : (
                <AiOutlineMenu className='w-6 h-6' onClick={navVisibilityHandler} />
                )} 
            </div>
            <div className={`${navIsVisible ? "right-0" : "-right-full"
                } transition-all duration-300 mt-[56px] lg:mt-0 bg-dark-hard lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-9 items-center`}>
                <ul className='text-white lg:text-dark-soft items-center gap-y-5 flex flex-col lg:flex-row gap-x-2 font-semibold'>
                  {navItemInfo.map((item) => (
                    <NavItem key={item.name} item={item} />
                  ))}
                </ul>
                <button className='mt-5 lg:mt-0 border-2  border-green-800 px-6 py-2 rounded-full text-white lg:text-green-800 font-semibold hover:bg-green-800 hover:text-white transition-all durration-300'>
                    Sign In
                </button>
            </div>
        </header>
    </section>
  )
}

export default Header