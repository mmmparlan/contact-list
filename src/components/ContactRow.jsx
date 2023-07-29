import React from 'react'


export default function ContactRow({ contact, selectedContactId,setSelectedContactId}){

    return(
        <tr onClick={()=> {
            console.log("onClick activiated!");
            selectedContactId = setSelectedContactId((selectedContactId) = contact.id);
            selectedContactId;
            
            // <div className="App">
            // {puppies.map((puppy) => {
            // return <p onClick={()=>{ setFeatPupId(puppy.id)
            // }} key={puppy.id}>{puppy.name}</p>
            // })}
            //{() => {setCount((count) = count + 1)}}

        }}
        >
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
        </tr>
    );
};