import React from "react";
import trollface from "../images/troll-face.png"


export default function Header() {
    return (
        <header className="header">
            <img src={trollface} alt="troll-face" className="header--logo"/>
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--text">React Course - Project 3</h4>
        </header>
    )
}