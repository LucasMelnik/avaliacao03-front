import React, { useState } from "react";
import api from "../../api";

import style from './index.module.css'

export default function Create() {
    const [contact, setContact] = useState({})

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
    

    function handleSubmit(event) {
        api.post('/contacts', contact)
    }

    return (
        <>
            <div className={style.container}>
                <form className={style.form} onSubmit={handleSubmit}>
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

                    <button className={style.button} name="submitButton" id="cadastroSubmit" type="submit" >Enviar</button>
                </form>
            </div>
        </>
    )
}