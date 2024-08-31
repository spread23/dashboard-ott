import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import { General } from './routes/general/General'
import { CreateOffers } from './routes/create-offers/CreateOffers'
import { Offers } from './routes/offers/Offers'
import { Profile } from './routes/profile/Profile'
import { Bot } from './routes/bot/Bot'

import { Navbar } from './components/navbar/Navbar'
import { Header } from './components/header/Header'

import './router.css'

export const Router = () => {
    return (
        <>
            <div className='page-container'>
                <Navbar></Navbar>
                <div className='show-page-container'>
                    <Header></Header>

                    <Routes>
                        <Route path='/' element={<General />}></Route>
                        <Route path='/general' element={<General />}></Route>

                        <Route path='/create-offers' element={<CreateOffers />}></Route>
                        <Route path='/offers' element={<Offers />}></Route>

                        <Route path='/profile' element={<Profile />}></Route>

                        <Route path='/bot' element={<Bot />}></Route>

                        <Route path='/*' element={<Navigate to='/general' />}></Route>
                    </Routes>
                </div>

            </div>
        </>
    )
}