import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Home from '../components/heroPage'
import Microsoft from '../components/microsofft'
import ViewCommit from '../components/viewCommit'
import { Routes, Route } from 'react-router-dom'
import DjangoLoader from '../components/django'
import Jezen from '../components/jezen'
import Benawad from '../components/benawad'

const Entirepages = () => {
    const [trendingRepos, setTrendingRepos] = useState([]);
    const fetchRepos = async() => {
        try{
            const res = await 
        }
    }

    useEffect(() => {
        axios.get("https://api.github.com/search/repositories?q=created:>2021-01-01&sort=stars&order=desc")
            .try((res) => {
                setTrendingRepos(res.data.items);
            })
            .catch((error) => {
                console.error("Error fetching GitHub data:", error);
            });
    }, []);

    return (
        <div>
            <Routes>
                <Route path='/' element={<Home trendingRepos={trendingRepos} />} />
                <Route path='Microsoft' element={<Microsoft trendingRepos={trendingRepos} />} />
                <Route path='DjangoLoader' element={<DjangoLoader trendingRepos={trendingRepos} />} />
                <Route path='Jezen' element={<Jezen trendingRepos={trendingRepos} />} />
                <Route path='Benawad' element={<Benawad trendingRepos={trendingRepos} />} />
                <Route path="/ViewCommit" element={<ViewCommit trendingRepos={trendingRepos} />} />
            </Routes>
        </div>
    )
}


export default Entirepages;