import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/Contact/operations';
import { selectIsLoading } from 'redux/selectors';
import {
  GlobalStyledContainer,
  GlobalStyledH1,
  GlobalStyledH2,
  GlobalStyledSection,
} from 'styles/GlobalStyle';

export const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <GlobalStyledContainer>
      <GlobalStyledSection>
        <GlobalStyledH1>PhoneBook</GlobalStyledH1>
        <ContactForm />
        <Filter />
        <GlobalStyledH2>Contacts</GlobalStyledH2>

        {isLoading ? <Loader /> : <ContactList />}
      </GlobalStyledSection>
    </GlobalStyledContainer>
  );
};
