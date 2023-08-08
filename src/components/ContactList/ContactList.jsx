import React from 'react';
//import { useSelector } from 'react-redux';
//import { ContatcItem } from './ContactList.slyled';
import ContactListtItem from 'components/ContactItem/ContactItem';

const ContactList = () => {
  //const { contacts } = useSelector(state => state.contacts);
  return (
    <div>
      <ContactListtItem />
    </div>
  );
};

export default ContactList;
