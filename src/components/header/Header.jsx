import React, { useState, useRef } from 'react'
import './header.css'

import { FaHeart } from 'react-icons/fa'
import { FaBell } from 'react-icons/fa'
import { FaUserCircle } from 'react-icons/fa'

export const Header = ({ setIsOpen, isOpen }) => {

    const dialogRef = useRef(null)
    const dialogRefTwo = useRef(null)
    const dialogRefThree = useRef(null)

    const showPopup = (dialog) => {
        dialog.current.showModal()
        document.body.classList.add('blur');
    }

    const closePopupOne = () => {
        dialogRef.current.close()
        document.body.classList.remove('blur');
    }

    const closePopupTwo = () => {
        dialogRefTwo.current.close()
        document.body.classList.remove('blur');
    }

    const closePopupThree = () => {
        dialogRefThree.current.close()
        document.body.classList.remove('blur');
    }

    return (
        <>
            <div className='header-container'>
                <div className={`menu-hamburger ${ isOpen && 'open' }`} onClick={() => setIsOpen(!isOpen)}>
                    <span></span><span></span><span></span>
                </div>
                <div className='profile-container'>
                    <div onClick={() => showPopup(dialogRef)} className='notifications'><FaHeart className='icons-header'></FaHeart></div>
                    <div onClick={() => showPopup(dialogRefTwo)} className='notifications'><FaBell className='icons-header'></FaBell></div>
                    <div onClick={() => showPopup(dialogRefThree)} className='profile'><FaUserCircle className='icons-header'></FaUserCircle>JPEskildsen</div>
                </div>
            </div>

            <dialog ref={dialogRef}>
                <p onClick={closePopupOne} className='close'>X</p>
                <div className='main-popup'>    
                    <h3 className='title-popup'>Estos son tus usuarios favoritos</h3>
                    <h6 className='description-popup'>
                        Lista de usuarios
                    </h6>
                    <h6>No has agregado favoritos aún</h6>
                </div> 
            </dialog>

            <dialog ref={dialogRefTwo}>
                <p onClick={closePopupTwo} className='close'>X</p>
                <div className='main-popup'>    
                    <h3 className='title-popup'>Estas son tus notificaciones</h3>
                    <h6 className='description-popup'>
                        Tienes 10 usuarios que han postuladoa tus ofertas
                    </h6>
                    <h6>Ningun usuaio ha postulado a tus ofertas aún</h6>
                </div> 
            </dialog>

            <dialog ref={dialogRefThree}>
                <p onClick={closePopupThree} className='close'>X</p>
                <div className='main-popup'>    
                    <h3 className='title-popup'>Esta es la información de tu perfil</h3>
                    <h6 className='description-popup'>
                        <h4>Nombre: Juan Pablo</h4>
                        <h4>Apellido: Skildsen</h4>
                        <h4>User: JPSkldsen</h4>
                        <h4>Email: jpskildsen@gmail.com</h4>
                    </h6>
                </div> 
            </dialog>
        </>
            
    )
}