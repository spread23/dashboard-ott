import React, { useState } from 'react'
import { Route, Routes, Navigate, Outlet } from 'react-router-dom'

import { FaPen } from 'react-icons/fa'

import { General } from './routes/general/General'
import { CreateOffers } from './routes/create-offers/CreateOffers'
import { Offers } from './routes/offers/Offers'
import { Profile } from './routes/profile/Profile'
import { Bot } from './routes/bot/Bot'

import { Navbar } from './components/navbar/Navbar'
import { Header } from './components/header/Header'

import './router.css'

export const Router = ({ setLoged, user, token }) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className='page-container'>
                <Navbar setLoged={setLoged} setIsOpen={setIsOpen} isOpen={isOpen}></Navbar>
                <div className='show-page-container'>
                    <Header setIsOpen={setIsOpen} isOpen={isOpen} user={user} token={token}></Header>

                    <Routes>
                        <Route path='/' element={<General token={token} />}></Route>
                        <Route path='/general' element={<General token={token} />}></Route>

                        <Route path='/create-offers' element={<CreateOffers user={user} token={token} />}></Route>
                        <Route path='/offers' element={<Offers user={user} token={token} />}></Route>

                        <Route path='/profile' element={<Profile />}></Route>

                        <Route path='/bot' element={<Bot />}></Route>

                        <Route path='/*' element={<Navigate to='/general' />}></Route>
                    </Routes>
                </div>
                <div className='profile-section'>
                    <div className='card-profile'>
                        <h2>Tus vacantes</h2>
                        <div className='edit-profile'><FaPen className='icon-profile' /><h3>Tienes 0 vacantes creadas</h3></div>
                        <div className='edit-profile'><FaPen className='icon-profile' /><h3>0 personas han postulado a tus vacantes</h3></div>
                    </div>

                    <div className='card-profile'>
                        <h2>Tu Perfil</h2>
                        <div className='edit-profile'><FaPen className='icon-profile' /><h3>Termina de configurar tu perfil, te falta poco</h3></div>
                        <div className='edit-profile'><FaPen className='icon-profile' /><h3>Añade una imagen a tu avatar</h3></div>
                    </div>

                    <div className='card-profile'>
                        <h2>Tus entrevistas</h2>
                        <div className='edit-profile'><FaPen className='icon-profile' /><h3>Has agendado 0 entrevistas</h3></div>
                        <div className='edit-profile'><FaPen className='icon-profile' /><h3>0 personas estan esperando por una entrevista</h3></div>
                    </div>
                </div>
            </div>
        </>
    )
}