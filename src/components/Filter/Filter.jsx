import { StyledLabel, StyledInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterChange } from 'redux/Filter/filterSlice';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(filterChange(event.target.value));
  };

  return (
    <StyledLabel>
      <StyledInput
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Find contacts by name..."
      />
    </StyledLabel>
  );
};
