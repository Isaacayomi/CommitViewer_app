import React from 'react'
import { SEARCH_ICON } from '../assets/icons/icons'
import { Link } from 'react-router-dom'

const Microsoft = () => {

    return (
        <div>
            <div className='bg-[#EFF2F6] h-[82px] mb-[32px] xl:flex xl:items-center xl:h-[130px] xl:justify-center'>
                <h1 className="text-dark font-inter text-[28px] font-[700] leading-normal tracking-[-0.6px] py-[24px] max-w-[198px] w-[100%] mx-[auto] h-[34px] xl:pt-[0] xl:mx-[0] xl:max-w-[198px] xl:w-[100%] xl:pb-[48px] xl:mr-[32px] xl:text-[24px]">CommitViewer</h1>

                <div className="xl:flex xl:flex-row-reverse xl:justify-end xl:items-center xl:gap-[5px] xl:max-w-[666px] xl:w-[100%] xl:py-[15px] xl:rounded-[8px] xl:bg-[#DFE4EA]">
                    <input type='text' placeholder="microsoft/vscode" className='hidden xl:block xl:bg-transparent xl:bg-[#DFE4EA] xl:m-[0] xl:tracking-[-0.5px]' />
                    <div className='hidden xl:block xl:ml-[16.16px]'>
                        <SEARCH_ICON />
                    </div>
                </div>

                <button className='hidden xl:block xl:max-w-[198px] xl:w-[100%] xl:bg-secondary xl:rounded-[8px] xl:text-[20px] xl:font-[600] xl:leading-[28px] xl:tracking-[-0.5px] xl:text-center xl:text-white xl:py-[17.4px] xl:h-[58px] xl:ml-[16px]'>
                    <Link to="/Microsoft">
                        See commits 🚀
                    </Link>
                </button>
            </div>
            <h1 className='text-dark text-[36px] font-[600] leading-[44px] tracking-[-1.5px] max-w-[286px] w-[100%] mx-[auto] text-center pb-[32px]'>
                microsoft/vscode
            </h1>
            <p className='max-w-[89px] w-[100%] mx-[auto] text-dark text-center'>Loading...</p>
        </div>
    )
}



export default Microsoft
