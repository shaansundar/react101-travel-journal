import React from 'react'
import './card.css'
import {MdLocationPin} from "react-icons/md";
const Card = (props) => {
    return (
        <div className='cardCanvas'>
            <img src={props.imageUrl} alt="new" />
            <div className="details">
                <div className="location">
                    <MdLocationPin style={{ color: "red", fontSize: "20px", margin: "0 15px 0 0" }}/>
                    <h3 style={{ color: "black", fontWeight:"bold", margin: "0 15px 0 0" }}>{props.location}</h3>
                    <a href={props.googleMapsUrl}><h5 style={{ color: "grey", fontStyle:"italic", textDecoration:"underline" ,margin: "0 15px 0 0" }}>See on Google Maps</h5></a>
                </div>
                <h1 style={{ color: "black", fontSize:"60px" ,fontWeight:"bold", margin: "10px 15px 25px 0" }}>{props.title}</h1>
                <h3 style={{ color: "black", fontWeight:"bold", margin: "0 0 0 0" }}>{props.startDate}- {props.endDate}</h3>
                <p>{props.description}</p>
            </div>
       </div>
    )
}

export default Card
