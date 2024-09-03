import React from 'react'
import './profile.css'

import { FaUserCircle } from 'react-icons/fa'

export const Profile = () => {
    return (
        <div className='profile-container-personal'>
            <h1>Tu perfil</h1>
            <div className='container-form'>

                <div className='form-profile-container'>
                    <form className='form-profile'>
                        <div className='form-group'>
                            <label htmlFor="name">Nombre</label>
                            <input name='name' type="text" />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="lastname">Apellido</label>
                            <input name='lastname' type="text" />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="username">Nombre de usuario</label>
                            <input name='username' type="text" />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="email">Email</label>
                            <input name='email' type="text" />
                        </div>
                    </form>
                </div>

                <div className='cards-update'>
                    <h2 className='title-update'>Cambiar contraseña</h2>

                    <form className='form-profile'>
                        <div className='form-group'>
                            <label htmlFor="new-password">Nueva contraseña</label>
                            <input name='name' type="password" />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="confirm-password">Confirma la contraseña</label>
                            <input name='lastname' type="password" />
                        </div>
                    </form>
                </div>

            </div>

            <div className='avatar-container'>
                <h2>Cambiar imagen avatar</h2>
                <div className='image-avatar-container'>
                    <h3>Cambiar imagen <FaUserCircle className='icon-avatar'></FaUserCircle></h3>
                    <input type="file" />
                    <button className='btn-update'>Actualizar imagen</button>
                </div>
            </div>
            <button className='btn-update'>Actualizar información</button>
        </div>
    )
}