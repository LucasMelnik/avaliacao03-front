import React, { useState } from "react";
import api from "../../api";

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

        event.preventDefault();
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
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

                    <button name="submitButton" id="cadastroSubmit" type="submit" >Enviar</button>
                </form>
            </div>
        </>
    )
}