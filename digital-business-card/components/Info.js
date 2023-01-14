import React from "react"

export default function Info() {
    return (
        <section className="info">
            <img className="info-photo" src="../assets/img/portrait.png" />
            <h1 className="info-name">Carlos Gámez</h1>
            <h3 className="info-role">Software Engineer</h3>
            <a className="info-web" href="https://bycarlosgamez.com" target="_blank">bycarlosgamez.com</a>
            <div className="info-btns">
                <a href="carlos.gamez.glez.com" className="info-btns__email" target="_blank"><img src="../assets/icons/mail.svg" />Email</a>
                <a href="carlos.gamez.glez.com" className="info-btns__linkedin" target="_blank"><img src="../assets/icons/linkedin.svg" />Linkedin</a>    
            </div>
        </section>
    )
} 