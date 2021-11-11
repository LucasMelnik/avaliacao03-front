import React, { useEffect, useState } from "react";

import api from '../../api/index'

import style from '../Create/index.module.css'

export default function Index() {

    const [contacts, setContacts] = useState([])

    async function handleRender() {
        const response = await api.get('/contacts')

        setContacts(response.data)
    }

    useEffect(() => {
        handleRender();
    }, []);

    return(
        <div className={style.container}>
            <div className={style.form} style={ {width: 'auto' }}>
                <table >
                    <tr>
                        <th style={{ fontFamily: "sans-serif" }}>Id</th>
                        <th style={{ fontFamily: "sans-serif" }}>Name</th>
                        <th style={{ fontFamily: "sans-serif" }}>E-mail</th>
                        <th style={{ fontFamily: "sans-serif" }}>Phone</th>
                    </tr>
                    {contacts.map((contact) => (
                        <tr >
                            <td style={{ borderBottom: "solid", borderWidth: "1px" }}>{contact.id}</td>
                            <td style={{ borderBottom: "solid", borderWidth: "1px" }}>{contact.name}</td>
                            <td style={{ borderBottom: "solid", borderWidth: "1px" }}>{contact.email}</td>
                            <td style={{ borderBottom: "solid", borderWidth: "1px" }}>{contact.phone}</td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    )
}