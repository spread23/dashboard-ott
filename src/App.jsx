import React, { useState } from 'react'
import { Route, Routes, NavLink } from 'react-router-dom'

import { Router } from './Router'
import { Login } from './Login'
import { Register } from './Register'

export const App = () => {
    const [loged, setLoged] = useState('')
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
                            <Route path='/' element={<Login setLoged={setLoged}></Login>}></Route>
                            <Route path='/login' element={<Login setLoged={setLoged}></Login>}></Route>
                            <Route path='/register' element={<Register />}></Route>
                        </Routes>
                    </div>
                </>
                :

                <Router setLoged={setLoged}></Router>


            }

        </div>
    )
}
