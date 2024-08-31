import React from 'react'
import './header.css'

export const Header = () => {
    return (
            <div className='header-container'>
                <div className='menu-hamburger'>Menu</div>
                <div className='profile-container'>
                    <div className='notifications'>Notificaciones</div>
                    <div className='profile'>Profile</div>
                </div>
            </div>
    )
}