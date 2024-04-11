import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 144px;

    background: ${({ theme })=> theme.COLORS.BACKGROUND_900};
  
    display: flex;
    align-items: center;

    padding: 0 124px;

    svg {
      color: ${({ theme })=> theme.COLORS.GRAY_100};
      font-size: 24px;
    }
  } 
`;

export const Form = styled.form`
  max-width: 340px;
  margin: 30px auto 0;
  // Afastamento no form entre email e senhas. Pegue a 4° div: (1)Avatar, (2)input(nome), (3)input(email), (4)input(senha) 
  > div:nth-child(4){ 
    margin-top: 24px;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: -124px auto 32px; // -124px faz a div Avatar subi 124px na posição relativa

  width: 186px;
  height: 186px;

  > img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  > label {
      width: 48px;
      height: 48px;

      background-color: ${({ theme })=> theme.COLORS.ORANGE};
      border-radius: 50%;
      // Para organizar a img(ícone) e o input
      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute; // posisiona a img a direita e embaixo a 7px
      bottom: 7px;
      right: 7px;

      cursor: pointer;

      input { // esconde o input
        display: none;
      }

      svg { //aumentando a img do ícone
        width: 20px;
        height: 20px;
        color: ${({ theme })=> theme.COLORS.BACKGROUND_800};
      }
  }
`;