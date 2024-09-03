import React from 'react'
import { NavLink } from 'react-router-dom'

import './navbar.css'
import logo from '../../assets/logo_solo.svg'

import { FaHouseUser } from 'react-icons/fa'
import { FaPortrait } from 'react-icons/fa'
import { FaUserTie } from 'react-icons/fa'
import { FaUserCheck } from 'react-icons/fa'
import { FaRobot } from 'react-icons/fa'
import { FaLockOpen } from 'react-icons/fa'

export const Navbar = ({ setLoged }) => {
    const handleOnClickLoged = (event) => {
        event.preventDefault()

        setLoged('')
    }
    return (
        <div className='nav-container'>
            <div className='menu-container'>
                <div className='logo-menu'>
                    <img className='logo' src={ logo } alt="logo" />
                </div>
                <div className='menu'>
                    <ul>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'active' : '' } to='/general'><FaHouseUser className='icons-menu'></FaHouseUser>General</NavLink>
                            <NavLink to='/profile'><FaPortrait className='icons-menu'></FaPortrait>Perfil</NavLink>
                            <NavLink to='/offers'><FaUserTie className='icons-menu'></FaUserTie>Vacantes</NavLink>
                            <NavLink to='/create-offers'><FaUserCheck className='icons-menu'></FaUserCheck>Crear vacante</NavLink>
                            <NavLink to='/bot'><FaRobot className='icons-menu'></FaRobot>bot</NavLink>
                            <NavLink className='log-out' onClick={handleOnClickLoged} to='/'><FaLockOpen className='icons-menu'></FaLockOpen>Cerrar Sesion</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}