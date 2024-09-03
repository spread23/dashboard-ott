import React from 'react'
import './header.css'

import { FaHeart } from 'react-icons/fa'
import { FaBell } from 'react-icons/fa'
import { FaUserCircle } from 'react-icons/fa'

export const Header = () => {
    return (
            <div className='header-container'>
                <div className='menu-hamburger'>Menu</div>
                <div className='profile-container'>
                    <div className='notifications'><FaHeart className='icons-header'></FaHeart></div>
                    <div className='notifications'><FaBell className='icons-header'></FaBell></div>
                    <div className='profile'><FaUserCircle className='icons-header'></FaUserCircle>JPEskildsen</div>
                </div>
            </div>
    )
}