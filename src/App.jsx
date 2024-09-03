import React, { useState } from 'react'

import { Router } from './Router'
import { Login } from './Login'

export const App = () => {
    const [ loged, setLoged ] = useState('')
    return (
    <div className='total-page'>
        {loged !== 'loged' ?
        
            <Login setLoged={setLoged}></Login>
            
            :

            <Router setLoged={setLoged}></Router>
    
    
        }
        
    </div>
)}
