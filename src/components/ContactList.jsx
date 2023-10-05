import React from "react"; 
import { useState } from 'react'
import { useEffect } from "react";
import ContactRow from "./ContactRow";

let result=[];


export default function ContactList({ setSelectedContactId }) { 
    const [contacts, setContacts] = useState(result);
    
      console.log("Contacts: ", contacts)
      useEffect(()=>{
        async function fetchContact(){
            try{
                const response=await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users');
                result=await response.json();
                console.log(result);
                setContacts(result);
            }catch(err){
                console.error(err);
            }
        }
        fetchContact();
      },[]);
  return ( 
        <table>
          <thead>
            <tr>
              <th colSpan="3">Contact List</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
            </tr>
            {
               contacts.map(contact=>{
                return <ContactRow key={contact.id} contact={contact} setSelectedContactId={setSelectedContactId}/>;
               })
             }
          </tbody>
        </table>
    ); 
}
