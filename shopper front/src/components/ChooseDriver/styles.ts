import styled from 'styled-components';

export const Container = styled.div`
  background-color: #e0e0e0;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 10px auto;

`;

export const Info = styled.div`
  color: #333;

  display: flex;
  justify-content: center;
  flex-direction: column;
  h2 {
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
    margin-bottom: 5px;
    display: flex;
    align-items: center;
  }

  p {
    margin: 5px 0;
  }
`;
