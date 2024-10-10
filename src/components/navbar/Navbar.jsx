import React from 'react'
import { NavLink, Navigate } from 'react-router-dom'

import './navbar.css'
import logo from '../../assets/logo_solo.svg'

import { FaHouseUser } from 'react-icons/fa'
import { FaPortrait } from 'react-icons/fa'
import { FaUserTie } from 'react-icons/fa'
import { FaUserCheck } from 'react-icons/fa'
import { FaRobot } from 'react-icons/fa'
import { FaLockOpen } from 'react-icons/fa'

export const Navbar = ({ setLoged, setIsOpen, isOpen }) => {
    const handleOnClickLoged = (event) => {

        setLoged('')
    }
    return (
        <div className={`nav-container ${ isOpen && 'open' }`}>
            <div className='menu-container'>
                <div className='logo-menu'>
                    <img className='logo' src={ logo } alt="logo" />
                </div>
                <div className='menu'>
                    <ul>
                        <li>
                            <NavLink onClick={() => setIsOpen(!isOpen)} className={({ isActive }) => isActive ? 'active' : ''} to='/general'><FaHouseUser className='icons-menu'></FaHouseUser>General</NavLink>
                            <NavLink onClick={() => setIsOpen(!isOpen)} to='/profile'><FaPortrait className='icons-menu'></FaPortrait>Perfil</NavLink>
                            <NavLink onClick={() => setIsOpen(!isOpen)} to='/offers'><FaUserTie className='icons-menu'></FaUserTie>Vacantes</NavLink>
                            <NavLink onClick={() => setIsOpen(!isOpen)} to='/create-offers'><FaUserCheck className='icons-menu'></FaUserCheck>Crear vacante</NavLink>
                            <NavLink onClick={() => setIsOpen(!isOpen)} to='/bot'><FaRobot className='icons-menu'></FaRobot>bot</NavLink>
                            <NavLink className='log-out' onClick={handleOnClickLoged} to='/login'><FaLockOpen className='icons-menu'></FaLockOpen>Cerrar Sesion</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}