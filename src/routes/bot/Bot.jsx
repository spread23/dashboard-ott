import React, { useEffect, useState } from 'react'
import Iframe from 'react-iframe'

import './bot.css'

export const Bot = ({ user, token }) => {

    const [listOffers, setListOffers] = useState([])
    const [listUsers, setListUsers] = useState([])
    const [ready, setReady] = useState(false)

    useEffect(() => {
        getOffers()
        getUsers()
    }, [])

    const getOffers = async () => {
        const response = await fetch(`https://dashboard-ofrecetutalento.com:3100/api/offer/get-offers/${user._id}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': token
            }
        })

        const data = await response.json()

        if (data.status == 'success') {
            setListOffers(data.offers)
            console.log(data)
        } else {
            console.log(data)
        }

    }

    const getUsers = async () => {
        const response = await fetch('https://dashboard-ofrecetutalento.com:3100/api/user/get-users', {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': token
            }
        })

        const data = await response.json()

        if (data.status == 'success') {
            setListUsers(data.users)
            console.log(data.users)
        }else {
            console.log(data)
        }

    }

    const getFetch = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        const users = listUsers.map((user) => {return {name: user.name, experience: user.experience, talents: user.talents, languajes: user.languaje}})
        const offers = listOffers.map((offer) =>{return {title: offer.title, description: offer.description, area: offer.area, experience: offer.experience, languajes: offer.languajes}})

        const body = {
            users,
            offers
        }

        const response = await fetch('https://minichatbot.com:4900/api/results/get-results', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify(body)
        })

        const data = await response.json()
        if (data.status == 'success') {
            console.log(data)
        } else {
            console.log(data.message)
        }
    }

    const setReadyButton = () => {
        getFetch()
        setReady(true)
    }

    return (
        <>
            {!ready ? <>
                <div className='bot-container'>
                    <h2 className='title-bot'>Habla con la IA y preguntale sobre los mejores talentos para tus ofertas</h2>
                    <button onClick={setReadyButton} className='btn-bot'>Chatear con la IA</button>
                </div>
            </> : 
            
            <div className='chatbot-container'>
                <Iframe
                    url='https://bot-bgps.netlify.app'
                    width='100%'
                    height='600px'
                />
            </div>}
        </>
    )
}