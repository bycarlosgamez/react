import React from "react"

export default function Header() {
    return (
        <header className="header"> 
            <div className="header--logo">
                <img className="header--logo__img" src="../images/troll-face.png" />
                <span className="header--logo__text">Meme Generator</span>
            </div>
            <h2 className="header--title">React Course - Project 3</h2>
        </header>
    )
}