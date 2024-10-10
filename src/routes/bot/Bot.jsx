import React from 'react'
import Iframe from 'react-iframe'

export const Bot = () => {
    return (
        <>
            <div className='chatbot-container'>
                <Iframe 
                    url='https://bot-bgps.netlify.app'
                    width='100%'
                    height='600px'
                />
            </div>
        </>
    )
}