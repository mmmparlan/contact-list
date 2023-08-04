import React from 'react'
import {useState,useEffect} from 'react'

export default function SelectedContact({selectedContactId, setSelectedContactId}) {

    const [contact,setContact] = useState(null);

    useEffect(()=> {

        async function fetchContact(){
            try {
                //fetch logic goes here
                const response = await fetch(
                    `https://jsonplaceholder.typicode.com/users/${selectedContactId}`
                );
                const result = await response.json();
                setContact(result);
                console.log(contact);
            } catch (error){
                console.error(error);
            }
        }
        fetchContact();

    },[]);

    return (
        <>
        <h2>Selected Contact</h2>
        {contact ? (
        <>
            <p>Name: {contact.name}</p>
            <p>Usersname: {contact.username}</p>
            <p>Email: {contact.email}</p>
            <p>City: {contact.address.city}</p>
            <p>Phone: {contact.phone}</p>
            <p>Website: {contact.website}</p>
            <p>Comppany name: {contact.company.name}</p>

        </>
        ) : (
            <p>loading! wait a second</p>
        )}{""}
        <button onClick={()=> setSelectedContactId(null)}>clear</button>
        </>
    );
}