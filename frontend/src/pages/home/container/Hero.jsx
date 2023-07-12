import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

import { images } from '../../../constants'

const Hero = () => {
  return (
    <section className='container mx-auto flex flex-col px-5 py-5 lg:flex-row'>
       <div className='mt-10 lg:w-1/2'>
            <h1 className='font-roboto text-3xl text-center font-bold text-dark-soft md:text-5xl lg:text-left lg:max-w-[540px]'>Read the most interesting articles</h1>
            <p className='text-dark-light mt-4 text-center md:text-xl lg:text-left'>This is a blog :D </p>
            <div className='flex flex-col gap-y-2.5 mt-10 relative'>
                <div className='relative'>
                    <AiOutlineSearch className='absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-dark-hard'></AiOutlineSearch>

                    <input className='placeholder:font-bold font-semibold text-dark-soft placeholder:text-dark-light rounded-lg pl-12 pr-3 w-full py-3 focus:outline-none shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]' type = "text" placeholder='Search Articles'></input>

                </div>
                <button className='w-full bg-primary text-white font-semibold rounded-lg px-5 py-3 md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 md:w-fit md:py-2'>Search</button>
            </div>
            <div className='flex mt-4 flex-col lg:items-start lg:flex-row lg:flex-nowrap lg:gap-x-4 lg:mt-7'>
                <span className='text-dark-light font-semibold italic mt-2 lg:mt-4'>Popular Tags</span>
                <ul className='flex flex-wrap gap-x-2.5 mt-3'>
                    <li className='rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold'>Desgin</li>
                    <li className='rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold'>User Experience</li>
                    <li className='rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold'>User Interface</li>
                </ul>
            </div>
       </div>
       <div className='hidden lg:block lg:w-1/2'>
            <img className='w-full h-5/6 px-10' src={images.HeroImage} alt='users are raeding articles'></img>
        </div> 
    </section>
  )
}

export default Hero