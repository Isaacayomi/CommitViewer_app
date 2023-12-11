import React from 'react'
import { useState, useEffect } from 'react'
import Home from '../components/heroPage'
import Microsoft from '../components/microsofft'
import ViewCommit from '../components/viewCommit'
import { Routes, Route } from 'react-router-dom'

const Entirepages = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Microsoft' element={<Microsoft />} />
                <Route path="/ViewCommit" element={<ViewCommit />} />
            </Routes>
        </div>
    )
}


export default Entirepages;