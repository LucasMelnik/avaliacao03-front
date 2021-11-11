import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";

import api from '../../api/index'
import Table from "./Table";

export default function Show() {

    const [contactId, setContactId] = useState(null)
    const [contact, setContact] = useState([])
    const [isSubmited, setIsSubmited] = useState([false])

    function handleChangeId(props) {
        setContactId(props.target.value)
    }

    async function handleSubmit(event) {
        const response = await api.get(`/contacts/${contactId}`)

        setContact(response.data)
        setIsSubmited(true)

        event.preventDefault();
    }

    useEffect(() => {
        return setIsSubmited(false)
    }, [])

    return(
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Informe o ID</label>
                    <input id="id" type="text" name="id" placeholder="#01" value={contactId} onChange={handleChangeId}></input>
                </div>
                <button type="button" onClick={handleSubmit}>Enviar</button>
            </form>
            {
                isSubmited ? <Table name={contact.name} email={contact.email} phone={contact.phone}/>
                : null
            }
        </>
    )
}