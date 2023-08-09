import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsSlice';
import { ItemWrap, DeleteBtn, ItemText } from './ContactListItem.styled';

const ContactListItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  const delContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ItemWrap>
      <ItemText>
        {name} : {number}
      </ItemText>
      <DeleteBtn
        onClick={() => {
          delContact(id);
        }}
      >
        X
      </DeleteBtn>
    </ItemWrap>
  );
};

export default ContactListItem;

ContactListItem.propTypes = {
  contact: PropTypes.objectOf(PropTypes.string).isRequired,
};
