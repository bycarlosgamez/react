import React from "react"

export default function Card(props) {
    console.log(props)
    return (
        <div className="card">
            <img className="card--photo" src={props.imageUrl} />
            <div className="card--content">
                <div className="card--header">
                    <div className="card--header__location">
                        <img className="card--header__location--icon" src="../assets/icon-location.png" />
                        <span className="card--header__location--city">{props.location}</span>
                        <a className="card--header__location--link" href={props.googleMapsUrl} targe="_blank">View on Google Maps</a>
                    </div>
                    <h2 className="card--header__title">{props.title}</h2>
                </div>
                <p className="card--dates">{props.startDate} - {props.endDate}</p>
                <p className="card--description">{props.description}</p>
            </div>
        </div>
    )
}