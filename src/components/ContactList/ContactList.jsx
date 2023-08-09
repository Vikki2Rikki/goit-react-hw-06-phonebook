import React from 'react';
import { useSelector } from 'react-redux';
import ContactListtItem from 'components/ContactListItem/ContactListItem';
import { List } from './ContactList.slyled';

const ContactList = () => {
  const { contacts } = useSelector(state => state.contacts);
  const { filter } = useSelector(state => state.filter);

  const contactList = () => {
    return filter
      ? contacts.filter(({ name }) => name.toLowerCase().includes(filter))
      : contacts;
  };

  return (
    <List>
      {contactList().map(contact => (
        <ContactListtItem key={contact.id} contact={contact} />
      ))}
    </List>
  );
};

export default ContactList;
