import React, { useState } from "react";
import api from "../../api";

import style from '../Create/index.module.css'

export default function Delete() {
    const [contactId, setContactId] = useState(null)

    function handleChangeId(props) {
        setContactId(props.target.value)
    }

    async function handleSubmit(event) {
        await api.delete(`/contacts/${contactId}`)
    }

    return(
        <div className={style.container}>
            <form className={style.form} onSubmit={handleSubmit}>
                <section className={style.section}>
                    <label>Informe o ID</label>
                    <input id="id" type="text" name="id" placeholder="#01" value={contactId} onChange={handleChangeId}></input>
                </section >
                <button className={style.button} type="button" onClick={handleSubmit}>Enviar</button>
            </form>
        </div>
    )
}