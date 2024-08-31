import React from 'react'
import { NavLink } from 'react-router-dom'

import './navbar.css'
import logo from '../../assets/logo_solo.svg'

export const Navbar = () => {
    return (
        <div className='nav-container'>
            <div className='menu-container'>
                <div className='logo-menu'>
                    <img className='logo' src={ logo } alt="logo" />
                </div>
                <div className='menu'>
                    <ul>
                        <li>
                            <NavLink to='/general'>General</NavLink>
                            <NavLink to='/profile'>Perfil</NavLink>
                            <NavLink to='/offers'>Vacantes</NavLink>
                            <NavLink to='/create-offers'>Crear vacante</NavLink>
                            <NavLink to='/bot'>bot</NavLink>
                            <NavLink className='log-out' to='/'>Cerrar Sesion</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}