import React from 'react';
import PropTypes from 'prop-types';
import ContactRow from './ContactRow';

const ContactTable = (props) => (
    <table>
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {!props.contacts ? null : props.contacts.map(contact => 
                <ContactRow 
                    key={contact.id}
                    contact={contact}
                    editContact={() => props.editContact(contact)}
                    removeContact={() => props.removeContact(contact.id)}
                />
            )}
        </tbody>
    </table>
)

export default ContactTable
