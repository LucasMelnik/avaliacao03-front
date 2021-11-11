import React from "react";
import { Link } from "react-router-dom"

export default function Header() {
    return(
        <nav>
            <Link to="/index" >INDEX</Link>
            <Link to="/show" >SHOW</Link>
            <Link to="/create" >CREATE</Link>
            <Link to="/update" >UPDATE</Link>
        </nav>
    )
}