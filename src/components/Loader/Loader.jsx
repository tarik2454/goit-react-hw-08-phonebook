import React from 'react';
import { Blocks } from 'react-loader-spinner';
import { styled } from 'styled-components';

export const Loader = () => {
  return (
    <StyledBlock>
      <Blocks
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
      />
    </StyledBlock>
  );
};
export const StyledBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15vh;
`;
