import React, { useState } from "react";
import api from "../../api";

export default function Delete() {
    const [contactId, setContactId] = useState(null)

    function handleChangeId(props) {
        setContactId(props.target.value)
    }

    async function handleSubmit(event) {
        await api.delete(`/contacts/${contactId}`)
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Informe o ID</label>
                    <input id="id" type="text" name="id" placeholder="#01" value={contactId} onChange={handleChangeId}></input>
                </div>
                <button type="button" onClick={handleSubmit}>Enviar</button>
            </form>
        </>
    )
}