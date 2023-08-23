import React, { useState } from 'react';
import {
  StyledForm,
  StyledInput,
  FormItem,
  StyledFormLabel,
  StyledButton,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';

import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/Contact/operations';
import { toast } from 'react-toastify';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;

    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleAddContact = newContact => {
    const isContactExist = contacts.some(
      contact => contact.name === newContact.name
    );

    if (isContactExist) {
      toast.error(`${newContact.name} is already in contacts`);
    } else {
      dispatch(addContact(newContact));
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    handleAddContact({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <FormItem>
        <StyledFormLabel htmlFor="name">Name: </StyledFormLabel>
        <StyledInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          value={name}
        />
      </FormItem>
      <FormItem>
        <StyledFormLabel htmlFor="email">Number: </StyledFormLabel>
        <StyledInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          value={number}
        />
      </FormItem>

      <FormItem>
        <StyledButton>Add contact</StyledButton>
      </FormItem>
    </StyledForm>
  );
};
