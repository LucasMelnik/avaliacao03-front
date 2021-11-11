import React, { useState } from "react";

import api from '../../api/index'

import style from '../Create/index.module.css'

export default function Update() {

    const [contact, setContact] = useState({})
    const [contactId, setContactId] = useState(null)

    function handleChangeId(props) {
        setContactId(props.target.value)
    }
    
    function handleChangeName(props) {
        setContact({...contact,
            name: props.target.value
        })
    }
    
    function handleChangeEmail(props) {
        setContact({...contact,
            email: props.target.value
        })
    }
    
    function handleChangePhone(props) {
        setContact({...contact,
            phone: props.target.value
        })
    }

    async function handleSubmit() {
        api.put(`/contacts/${contactId}`, contact)
    }

    return(
        <div className={style.container}>
            <form className={style.form} onSubmit={handleSubmit}>
                <section className={style.section}>
                    <label>Informe o ID</label>
                    <input id="id" type="text" name="id" placeholder="#01" value={contactId} onChange={handleChangeId}></input>
                </section>

                <section className={style.section}>
                    <label>Nome</label>
                    <input id="name" type="text" name="name" placeholder="Lucas Melnik" value={contact.name} onChange={handleChangeName}></input>
                </section>

                <section className={style.section}>
                    <label>E-mail</label>
                    <input id="mail" type="text" name="mail" placeholder="lucas@mail.com" value={contact.email} onChange={handleChangeEmail}></input>
                </section>

                <section className={style.section}>
                    <label>Telefone</label>
                    <input id="phone" type="text" name="phone" placeholder="(DDD) 99999-0000" value={contact.phone} onChange={handleChangePhone}></input>
                </section>
                <button className={style.button} type="button" onClick={handleSubmit}>Enviar</button>
            </form>
        </div>
    )
}