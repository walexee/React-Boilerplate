import React from 'react';
import PropTypes from 'prop-types';

const ContactRow = (props) => {
    if (!props.contact) {
        return null;
    }
    
    return (
        <tr>
            <td>{props.contact.firstName}</td>
            <td>{props.contact.lastName}</td>
            <td>{props.contact.email}</td>
            <td><button onClick={props.editContact}>Edit</button></td>
            <td><button onClick={props.removeContact}>Remove</button></td>
        </tr>
    );
}

export default ContactRow;
