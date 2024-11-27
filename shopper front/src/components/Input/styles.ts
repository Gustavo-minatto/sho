import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px;
`;

export const InputField = styled.input`
  padding: 15px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 2px solid #ccc;
  border-radius: 4px;
  outline: none;
  &:focus {
    border-color: ${({ theme }) => theme.COLORS.GREEN};
  }
`;
