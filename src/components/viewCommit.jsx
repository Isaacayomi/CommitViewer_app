import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { CIRCLE_ICON, SEARCH_ICON } from '../assets/icons/icons'
import { Link } from 'react-router-dom'
import { fetchData } from '../API/Api'
import ApiKey from '../services/axios'

const ViewCommit = () => {
    const [commits, setCommits] = useState([])
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState('')

    const locate = useLocation()

    useEffect(() => {
        setData(locate.state.data)
    }, [])


    const fetchApi = async () => {
        setLoading(true)
        try {
            const response = await ApiKey.get(`https://api.github.com/search/commits?q=/${data.full_name}`)
            setCommits(response.data.items)
            console.log(response.data)
        }
        catch (err) {
            console.log(err)
        }
        finally {
            setLoading(false)
        }
    }


    useEffect(() => {
        fetchApi();
    }, [])

    return (
        <div>
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
                        <Link to="/microsoft">
                            See commits 🚀
                        </Link>
                    </button>
                </div>
                <h1 className='text-dark text-[36px] font-[600] leading-[44px] tracking-[-1.5px] max-w-[286px] w-[100%] mx-[auto] text-center'>
                    microsoft/vscode
                </h1>

                <div className='flex flex-col max-w-[396px] w-[100%] mx-[auto] px-[3px] items-center justify-center my-[32px]'>
                    <p className='text-dark text-[20px] font-[400] leading-[28px] tracking-[-0.4px]'>Log all errors to console.error by default (#21130)</p>
                    <div className='flex items-align gap-[100px] mt-[16px] '>
                        <div className="flex gap-[16px] items-center">
                            <CIRCLE_ICON />
                            <p className='text-[20px] font-[600] leading-[30px] tracking-[-0.55px]'>{commits?.commit?.author?.name} </p>
                        </div>
                        <p className=' text-[20px] align-right text-[#18214D] font-[400] leading-[28px] tracking-[-0.4px]'>23:30 28/04/2021</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ViewCommit