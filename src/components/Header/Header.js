import React from "react";
import { Link } from "react-router-dom"

import style from './Header.module.css'

export default function Header() {
    return(
        <nav className={style.nav}>
            <Link className={style.link} to="/index" >INDEX</Link>
            <Link className={style.link} to="/show" >SHOW</Link>
            <Link className={style.link} to="/create" >CREATE</Link>
            <Link className={style.link} to="/update" >UPDATE</Link>
            <Link className={style.link} to="/delete" >DELETE</Link>
        </nav>
    )
}