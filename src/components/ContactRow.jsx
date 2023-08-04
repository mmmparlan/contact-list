import React from 'react'
import {useState} from 'react'

export default function ContactRow({ contact,setSelectedContactId}){
    // const [successMessage, setSuccessMessage] = useState(null);
    // const [error, setError] = useState(null);

    // async function handleClick(){
    //         selectedContactId = contact.id;
    //         console.log(contact.id)
    //         console.log("handleClick initiated")
            
    //     } 

    return(
        <tr onClick={setSelectedContactId(contact.id)}
        >
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
        </tr>
    );
};