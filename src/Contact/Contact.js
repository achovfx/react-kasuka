import React from 'react'
import Message from "./Message/Message"
import "./Contact.css"


export default function Contact() {
  return (
    <div className='contact-container'>
        <div className="map">
            <img src="./img/map.png" alt="google map" />
        </div>
        <Message></Message>
    </div>
  )
}
