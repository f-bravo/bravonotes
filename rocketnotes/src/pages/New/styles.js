import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto; //105px é do componente header
  grid-template-areas: 
  "header"
  "content";
`;

export const Form = styled.form`
  max-width: 550px;
  margin: 38px auto; // 38 em cima/baixo e auto posiciona no meio

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 36px;

    a {
      font-size: 20px;
      color: ${({ theme })=> theme.COLORS.GRAY_100};
    }
  } 
`;