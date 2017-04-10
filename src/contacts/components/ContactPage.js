import React from 'react';
import PropTypes from 'prop-types';
import ContactTable from './ContactTable';
import AddContactButton from './AddContactButton';
import ContactEditor from './ContactEditor';

const ContactPage = (props) => (
    <div>
        <ContactTable 
            contacts={props.contacts} 
            editContact={props.editContact} 
            removeContact={props.removeContact}/>
        <AddContactButton 
            showEditor={props.showEditor}
            addNewContact={props.addNewContact}  />
        <ContactEditor 
            showEditor={props.showEditor}
            contact={props.contact}
            saveContact={props.saveContact} />
        <p><a href="/counter">See Counter</a></p>
    </div>
);

export default ContactPage;
