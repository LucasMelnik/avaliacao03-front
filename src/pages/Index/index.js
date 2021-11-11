import React, { useEffect, useState } from "react";

import api from '../../api/index'

export default function Index() {

    const [contacts, setContacts] = useState([])

    async function handleRender() {
        const response = await api.get('/contacts')

        setContacts(response.data)

        console.log(contacts)
    }

    useEffect(() => {
        handleRender();
    }, []);

    return(
        <>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>E-mail</th>
                    <th>Phone</th>
                </tr>
                {contacts.map((contact) => (
                    <tr>
                        <td>{contact.id}</td>
                        <td>{contact.name}</td>
                        <td>{contact.email}</td>
                        <td>{contact.phone}</td>
                    </tr>
                ))}
            </table>
        </>
    )
}