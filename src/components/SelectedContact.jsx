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
        
        </>

    );
}