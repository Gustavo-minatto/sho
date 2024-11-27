import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 20px;
  p{
    margin: 10px 0;
  }
  
  a{
    color: ${({ theme }) => theme.COLORS.GREEN};
    margin-left: 5px;
  }
`;