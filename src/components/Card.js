import React from "react"


const Card = (props) => {
    return(
        <div className="card--element">
                <span>&#x1F4CD;<strong className="card--location">{props.item.location}</strong></span>
                <p>
                <a href={`https://maps.google.com/maps?q=${encodeURIComponent(props.item.place)} `} target="_blank" rel="noopener noreferrer">
                    View on Google Maps
                </a>
                </p>

                <img src={process.env.PUBLIC_URL + '/images/' + props.item.img} alt="" />
            <div>
            </div>
            <h2>{props.item.place}</h2>
            <h4>{props.item.dates}</h4>
            <p>{props.item.description}</p>
        </div>
    )
}

export default Card;