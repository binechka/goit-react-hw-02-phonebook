import React from 'react'
import l from "./ContactList.module.css"

const ContactList = ({ contacts, onDeleteContact }) => (
    <>
     <h2 className={l.title}>Contacts</h2>
    <ul className={l.list}>
        {contacts.map(({ id, name, number }) => (
            <li key={id}>{name}  {number} <button className={l.btn} onClick={() => { onDeleteContact(id) }}>Delete</button></li>    
            
        )) }
        </ul>
        </>
)

   



export default ContactList