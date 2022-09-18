import React from 'react'
import l from "./ContactList.module.css"

const ContactList = ({contacts, onDeleteContact}) => (
    <ul className={l.list}>
        {contacts.map(({ id, name, number }) => (
            <li key={id}>{name}  {number} <button onClick={() => { onDeleteContact(id) }}>Delete</button></li>    
            
        )) }
        </ul>
)

   



export default ContactList