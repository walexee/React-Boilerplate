import React from 'react';
import PropTypes from 'prop-types';

const AddContactButton = (props) => {
    if (props.showEditor) {
        return null;
    }

    return <button onClick={props.addNewContact}>Add Contact</button>
};

export default AddContactButton;
