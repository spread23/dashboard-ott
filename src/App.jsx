import React, { useState } from 'react'
import { Route, Routes, NavLink, Navigate } from 'react-router-dom'

import { Router } from './Router'
import { Login } from './Login'
import { Register } from './Register'

export const App = () => {
    const [loged, setLoged] = useState('')
    const [user, setUser] = useState(null)
    const [token, setToken] = useState('')
    return (
        <div className='total-page'>
            {loged !== 'loged' ?

                <>
                    <div className='log-container'>
                        <div className='navigate-register-login'>
                            <NavLink to='/login' className='btn-update btn-register'>Login</NavLink>
                            <NavLink to='/register' className='btn-update btn-register'>Regístrate</NavLink>
                        </div>
                        <Routes>
                            <Route path='/*' element={<Navigate to='/' />}></Route>
                            <Route path='/' element={<Login setLoged={setLoged} setUser={setUser} setToken={setToken}></Login>}></Route>
                            <Route path='/login' element={<Login setLoged={setLoged} setUser={setUser} setToken={setToken}></Login>}></Route>
                            <Route path='/register' element={<Register />}></Route>
                        </Routes>
                    </div>
                </>
                :

                <Router setLoged={setLoged} user={user} token={token}></Router>


            }

        </div>
    )
}
