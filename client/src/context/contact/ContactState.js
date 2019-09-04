import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types';

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: "Jill",
                phone: '74565777',
                email: 'jill@gmail.com',
                type: 'personal'
            },
            {
                id: 2,
                name: "May",
                phone: '23232323',
                email: 'may@gmail.com',
                type: 'personal'
            }
        ]
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);

    // Add contact
    const addContact = contact => {
        contact.id = uuid.v4();
        dispatch({ type: ADD_CONTACT, payload: contact });
    }

    // Delete contact

    // Set current contact

    // Clear current

    // Update contact

    // Filter contacts

    // Clear filter


    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts,
                addContact
            }}
        >
            {props.children}
        </ContactContext.Provider>
    )
};

export default ContactState;