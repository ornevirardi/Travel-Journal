import React from "react"


export default function Card(props){
    return(
    <div>
     <div className="card">
        <img src={props.item.imageUrl} className="card--img" />
        <div className="card--content">
            <div className='card--location'>
                <p>📍<span className="card--location">{props.item.location.toUpperCase()}
                </span>
                <span><a href={props.item.googleMapsUrl} className="card--link">View on Google Maps</a></span></p>
            </div>
            <h2 className="card--city">{props.item.title}</h2>
            <span className="card--dates">{props.item.startDate} - {props.item.endDate}</span>
            <p className="card--text">{props.item.description}</p>
        </div>
        </div>
         <hr/>
    </div>
    )
}
