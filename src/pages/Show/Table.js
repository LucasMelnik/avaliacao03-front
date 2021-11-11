import React from "react";

export default function Table({ name, email, phone }) {
    return(
        <>
            <tr>
                <th>Name</th>
                <th>E-mail</th>
                <th>Phone</th>
            </tr>
            <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>{phone}</td>
            </tr>
        </>
    )
}