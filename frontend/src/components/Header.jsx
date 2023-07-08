import React from 'react'
import {images} from '../constants'

const navItemInfo = [
    {name: "Home"},
    {name: "Articles"},
    {name: "Pages"},
    {name: "Pricing"},
    {name: "FAQ"},
    {name: "Contact"},
]

const NavItem = ({name}) => {
    return (
        <li className='relative group hover:font-bold'>
            <a href="/" className='px-4 py-2'>
                {name}
            </a>
        </li>
    );
};

const Header = () => {
  return (
    <section>
        <header className='container mx-auto px-5 flex justify-between py-4 items-center'>
            <div>
                 <img src={images.Logo} alt='logo' width= '100px'></img> 
            </div>
            <div className='flex gap-x-5 items-center'>
                <ul className='flex gap-x-5 font-semibold'>
                  {navItemInfo.map((item) => (
                    <NavItem key={item.name} name={item.name} />
                  ))}
                </ul>
                <button className='border-2 border-green-800 px-6 py-2 rounded-full text-green-800 font-semibold hover:bg-green-800 hover:text-white transition-all durration-300'>
                    Sign In
                </button>
            </div>
        </header>
    </section>
  )
}

export default Header