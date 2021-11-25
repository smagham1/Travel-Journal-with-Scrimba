import React from 'react'
import { RiMapPinFill } from 'react-icons/ri';

function Card(props) {
    return (
        <div>
            <div className='flexContainer'>
                <div className='imageContainer'>
                    <img className='travelPhotos' src={`../Images/${props.item.imageUrl}`} alt='travel' />
                </div>
                <div className='textContainer'>
                    <div className='titleRow'>
                        <p className='country'><RiMapPinFill className='pin' />{props.item.location}</p>
                        <p className='maps'><a className='mapsLink' href={props.item.googleMapsUrl} target="_blank">View on Google Maps</a></p>
                    </div>
                    <p className='title'>{props.item.title}</p>
                    <p className='date'>{props.item.startDate} - {props.item.endDate}</p>
                    <p className='description'>{props.item.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Card