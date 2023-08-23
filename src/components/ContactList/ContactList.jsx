import {
  StyledContactList,
  StyledItem,
  StyledButton,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { deleteContact } from 'redux/Contact/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <StyledContactList>
      {visibleContacts.map(({ id, name, number }, index) => (
        <StyledItem key={id}>
          <span>
            {index + 1}. {name}:
          </span>

          <span>{number}</span>
          <StyledButton
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            Delete
          </StyledButton>
        </StyledItem>
      ))}
    </StyledContactList>
  );
};
