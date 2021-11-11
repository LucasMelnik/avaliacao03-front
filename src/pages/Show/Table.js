import React from "react";

import style from '../Create/index.module.css'

export default function Table({ name, email, phone }) {
    return(
        <div className={style.container}>
            <div className={style.form} style={{ width: 'auto' }}>
                <tr>
                    <th style={{ fontFamily: "sans-serif" }}>Name</th>
                    <th style={{ fontFamily: "sans-serif" }}>E-mail</th>
                    <th style={{ fontFamily: "sans-serif" }}>Phone</th>
                </tr>
                <tr>
                    <td style={{ borderBottom: "solid", borderWidth: "1px" }}>{name}</td>
                    <td style={{ borderBottom: "solid", borderWidth: "1px" }}>{email}</td>
                    <td style={{ borderBottom: "solid", borderWidth: "1px" }}>{phone}</td>
                </tr>
            </div>
        </div>
    )
}