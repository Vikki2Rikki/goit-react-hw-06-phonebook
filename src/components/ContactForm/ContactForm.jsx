import React, { useState } from 'react';
import {
  FormContainer,
  WrapInput,
  Input,
  BtnSubmit,
} from './ContactForm.styled';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/contactsSlice';
import { nanoid } from 'nanoid';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInput = ({ target: { name, value } }) => {
    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    ///const form = evt.currentTarget;
    dispatch(
      addContact({
        id: nanoid(),
        name: name,
        number: number,
      })
    );
    //reset();
  };

  // onSubmit({
  //   id: nanoid(),
  //   name: name,
  //   number: number,
  // });

  // const reset = () => {
  //   setName('');
  //   setNumber('');
  // };

  return (
    <FormContainer>
      <form className="form" onClick={handleSubmit}>
        <WrapInput>
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleInput}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </WrapInput>
        <WrapInput>
          <label htmlFor="exampleInputNumber" className="form-label">
            Number
          </label>
          <Input
            type="tel"
            name="number"
            value={number}
            onChange={handleInput}
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </WrapInput>
        <BtnSubmit type="submit">Add contact</BtnSubmit>
      </form>
    </FormContainer>
  );
};

export default ContactForm;
