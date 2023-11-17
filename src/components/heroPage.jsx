// import axios from 'axios'
import { useState, useEffect } from 'react'
import React from 'react'
import { SEARCH_ICON } from '../assets/icons/icons'
import { Link } from 'react-router-dom'

const Home = () => {
   

    return (
        <div>
            <div className='xl:flex xl: items-center xl:justify-center xl:gap-[44.94rem] xl:max-w-[87.5rem] xl:w-[100%] xl:mx-[auto]'>
                <h1 className="text-dark font-inter text-[24px] text-center font-[700] leading-normal tracking-[-3px] w-[12.375rem] h-[2.125rem] mt-[1.5rem] mb-[1rem] mx-[auto] xl:ml-[145px] xl:text-[24px]">CommitViewer</h1>

                <nav className='xl:mt-[51px] xl:mr-[145px]'>
                    <ul className=' w-[10.0625rem] mx-[auto] flex justify-center items-center gap-[2rem] mb-[2rem]'>
                        <li className='text-dark font-inter font-[400] text-[1.25rem] leading-[1.75rem] tracking-[-0.025rem] text-right'>About</li>
                        <li className='text-dark font-inter font-[400] text-[1.25rem] leading-[1.75rem] tracking-[-0.025rem] text-right'>Contact</li>
                    </ul>
                </nav>
            </div>

            <div className='mx-[2rem] xl:mt-[67px]'>
                <h1 className='text-dark text-center font-inter text-[3.25rem] font-[600] leading-[3.875rem] tracking-[-0.15rem] justify-center max-w-[24.75rem] w-[100%] mx-[auto] mb-[1.5rem] xl:max-w-[540px] xl:w-[100%] xl:text-[70px] xl:leading-[80px] xl:tracking-[-4px] xl:mb-[16px]'>Discover the world of code</h1>
                <p className='text-paragraph text-center font-inter text-[1.25rem] font-[400] leading-[1.75rem] tracking-[-0.025rem] max-w-[24.75rem] w-[100%] mx-[auto] mb-[4rem] xl:max-w-[445px] xl:w-[100%] xl:mb-[64px] '>Explore open source projects from GitHub, and read their commit history to see the story of how they were built.</p>
            </div>

            <div className='mx-[2rem]'>
                <div className="xl:flex xl:justify-center xl:items-center xl:gap-[16px]">
                    <div className='flex flex-row-reverse justify-end items-center gap-[0.3rem] py-[0.94rem] mb-[1.5rem] max-w-[24.75rem] w-[100%] mx-[auto] rounded-[0.5rem] bg-[#DFE4EA] xl:max-w-[694px] xl:w-[100%] xl:mr-[0]'>
                        <input type='text' placeholder='Eg. facebook/react' className='font-inter text-[1.25rem] font-[400] leading-[1.75rem] tracking-[-0.03125rem] text-neutral w-[10.6875rem] bg-transparent outline-none  ' />
                        <div className='ml-[1.01rem]'>
                            <SEARCH_ICON />
                        </div>
                    </div>


                    <button className='max-w-[24.75rem] w-[100%] mx-[auto] mb-[2rem] block pt-[1.09rem] pb-[0.79rem] bg-secondary rounded-[0.5rem] font-inter text-[1.25rem] font-600 leading-[1.75rem] tracking-[-0.03125rem] text-white text-center xl:max-w-[210px] xl:w-[100%] xl:ml-[0]'>
                        <Link to="/ViewCommit">
                            See commits 🚀
                        </Link>
                    </button>
                </div>
            </div>

            <p className='max-w-[236px] w-[100%] mx-[auto] text-paragraph text-center font-inter font-[400] text-[13.5px] leading-[1.25rem] tracking-[-0.025rem] mb-[2rem] xl:max-w-[236px] xl:w-[100%]'>or pick one of these suggested repos</p>

            <div className='xl:flex xl:items-center xl:justify-center xl:m-[0] xl:gap-[32px] xl:mb-[100px]'>
                <button className='max-w-[8.75rem] w-[100%] mx-[auto] mb-[1rem] py-[0.5rem] px-[1rem] bg-[#29335C] rounded-[0.5rem] block text-white text-center text-[1rem] font-[600] leading-normal tracking-[-0.025rem] xl:m-[0]'>
                    <Link to="/DjangoLoader">django/django</Link>
                </button>
                <button className='block max-w-[10.1875rem] w-[100%] mx-[auto] mb-[1rem] py-[0.5rem] px-[1rem] bg-[#29335C] rounded-[0.5rem] text-white text-center text-[1rem] font-[600] leading-normal tracking-[-0.025rem] xl:m-[0]'>
                    <Link to="/Microsoft">
                        microsoft/vscode
                    </Link>
                </button>
                <button className='block max-w-[10.19rem] w-[100%] mx-[auto] mb-[1rem] py-[0.5rem] px-[1rem] text-white text-center text-[1rem] font-[600] leading-normal tracking-[-0.025rem] bg-[#29335c] rounded-[0.5rem] xl:m-[0]'>
                    <Link to="/Jezen">jezen/is-thirteen</Link>
                </button>
                <button className='block rounded-[0.5rem] max-w-[11.875rem] w-[100%] mx-[auto] py-[0.5rem] px-[1rem] bg-[#29335c] text-white text-center leading-normal tracking-[-0.025rem] font-[600] mb-[2.37rem] xl:m-[0]'>
                    <Link to="/Benawad">benawad/dogehouse</Link>
                </button>
            </div>
        </div>
    )
}

export default Home
