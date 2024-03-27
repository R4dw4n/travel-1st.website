import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these EPIC Destination!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                     src="/images/img-9.jpg"
                     text="Explore the hidden waterfall deep inside the Amazon Jungle"
                     label="Adventure"
                     path="/services" />
                     <CardItem
                     src="/images/img-2.jpg"
                     text="Explore the beautiful island in Hawaii!"
                     label="Sail"
                     path="/services" />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                     src="/images/img-1.jpg"
                     text="Watch the sunset from an astonishing mountain view!"
                     label="Climbing"
                     path="/services" />
                     <CardItem
                     src="/images/img-8.jpg"
                     text="Take a look the one of the biggest deserts in the world!"
                     label="Survival"
                     path="/services" />
                     <CardItem
                     src="/images/img-4.jpg"
                     text="Experience soccer on this amazing pitch on an island!"
                     label="Sports"
                     path="/services" />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards