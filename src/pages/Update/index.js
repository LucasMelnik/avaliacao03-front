import React, { useState } from "react";

import api from '../../api/index'

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
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Informe o ID</label>
                    <input id="id" type="text" name="id" placeholder="#01" value={contactId} onChange={handleChangeId}></input>
                </div>

                <div>
                    <label>Nome</label>
                    <input id="name" type="text" name="name" placeholder="Lucas Melnik" value={contact.name} onChange={handleChangeName}></input>
                </div>

                <div>
                    <label>E-mail</label>
                    <input id="mail" type="text" name="mail" placeholder="lucas@mail.com" value={contact.email} onChange={handleChangeEmail}></input>
                </div>

                <div>
                    <label>Telefone</label>
                    <input id="phone" type="text" name="phone" placeholder="(DDD) 99999-0000" value={contact.phone} onChange={handleChangePhone}></input>
                    </div>
                <button type="button" onClick={handleSubmit}>Enviar</button>
            </form>
        </>
    )
}